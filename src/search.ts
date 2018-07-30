import { Media, MediaType } from "./models";

export interface Search {
  searchMedia(query: string, mediaType: MediaType): Promise<[Media]>;
}

export class AniListSearch implements Search {
  private baseUrl = "https://graphql.anilist.co";
  private mediaQuery: string = `
    query($page: Int = 1, $perPage: Int = 10, $search: String, $type: MediaType, $sort: [MediaSort]) {
      page: Page(page: $page, perPage: $perPage) {
        media: media(search: $search, sort: $sort, type: $type) {
          id
          title { romaji }
          coverImage { large }
        }
      }
    }`;

  private characterQuery: string = `
    query ($page: Int = 1, $perPage: Int = 10, $search: String, $sort: [CharacterSort]) {
      page: Page(page: $page, perPage: $perPage) {
        characters: characters(search: $search, sort: $sort) {
          id
          name { first last }
          image { large }
        }
      }
    }`;

  public async searchMedia(
    query: string,
    mediaType: MediaType
  ): Promise<[Media]> {
    switch (mediaType) {
      case "anime":
      case "manga":
        return this.searchAnimeOrManga(query, mediaType);
        break;
      case "character":
        return this.searchCharacter(query);
        break;
    }
  }

  private async searchJson(query: string, variables: any): Promise<any> {
    const body: any = { query, variables };

    const result = await fetch(this.baseUrl, {
      method: "POST",
      headers: new Headers([
        ["accept", "application/json"],
        ["content-type", "application/json"]
      ]),
      body: JSON.stringify(body)
    });

    return await result.json();
  }

  private async searchCharacter(query: string): Promise<[Media]> {
    let variables = {
      page: 1,
      perPage: 10,
      search: query,
      sort: ["SEARCH_MATCH", "FAVOURITES_DESC"]
    };

    const json = await this.searchJson(this.characterQuery, variables);

    return json.data.page.characters.map(character => ({
      id: "character:" + character.id,
      title: [character.name.last, character.name.first]
        .filter(Boolean)
        .join(" "),
      image: character.image.large
    }));
  }

  private async searchAnimeOrManga(
    query: string,
    mediaType: MediaType
  ): Promise<[Media]> {
    let variables = {
      page: 1,
      perPage: 10,
      search: query,
      type: mediaType.toUpperCase(),
      sort: ["POPULARITY_DESC", "SEARCH_MATCH"]
    };

    const json = await this.searchJson(this.mediaQuery, variables);

    return json.data.page.media.map(media => ({
      id: mediaType + ":" + media.id,
      title: media.title.romaji,
      image: media.coverImage.large
    }));
  }
}
