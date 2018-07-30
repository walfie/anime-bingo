import { Media, MediaType } from "./models";

export interface Search {
  searchMedia(
    query: string,
    mediaType: MediaType,
    options: SearchOptions
  ): Promise<[Media]>;
}

export interface SearchOptions {
  preferEnglish: boolean;
  preferSurnameFirst: boolean;
}

export class AniListSearch implements Search {
  private baseUrl = "https://graphql.anilist.co";
  private mediaQuery: string = `
    query($page: Int = 1, $perPage: Int = 10, $search: String, $type: MediaType, $sort: [MediaSort]) {
      page: Page(page: $page, perPage: $perPage) {
        media: media(search: $search, sort: $sort, type: $type) {
          id
          title { romaji english }
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

  private staffQuery: string = `
    query ($page: Int = 1, $perPage: Int = 10, $search: String) {
      page: Page(page: $page, perPage: $perPage) {
        staff: staff(search: $search) {
          id
          name { first last }
          image { large }
        }
      }
    }`;

  public async searchMedia(
    query: string,
    mediaType: MediaType,
    options: SearchOptions
  ): Promise<[Media]> {
    switch (mediaType) {
      case "anime":
      case "manga":
        return this.searchAnimeOrManga(query, mediaType, options);
        break;
      case "character":
        return this.searchCharacter(query, options);
        break;
      case "staff":
        return this.searchStaff(query, options);
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

  private makeName(
    givenName: string,
    surname: string,
    preferSurnameFirst: boolean
  ): string {
    const nameParts = preferSurnameFirst
      ? [surname, givenName]
      : [givenName, surname];

    return nameParts.filter(Boolean).join(" ");
  }

  private async searchCharacter(
    query: string,
    options: SearchOptions
  ): Promise<[Media]> {
    let variables = {
      search: query,
      sort: ["SEARCH_MATCH", "FAVOURITES_DESC"]
    };

    const json = await this.searchJson(this.characterQuery, variables);

    return json.data.page.characters.map(character => ({
      id: "character:" + character.id,
      title: this.makeName(
        character.name.first,
        character.name.last,
        options.preferSurnameFirst
      ),
      image: character.image.large
    }));
  }

  private async searchAnimeOrManga(
    query: string,
    mediaType: MediaType,
    options: SearchOptions
  ): Promise<[Media]> {
    let variables = {
      search: query,
      type: mediaType.toUpperCase(),
      sort: ["POPULARITY_DESC", "SEARCH_MATCH"]
    };

    const json = await this.searchJson(this.mediaQuery, variables);

    return json.data.page.media.map(media => {
      const title =
        (options.preferEnglish && media.title.english) || media.title.romaji;

      return {
        id: mediaType + ":" + media.id,
        title,
        image: media.coverImage.large
      };
    });
  }

  private async searchStaff(
    query: string,
    options: SearchOptions
  ): Promise<[Media]> {
    let variables = { search: query };

    const json = await this.searchJson(this.staffQuery, variables);

    return json.data.page.staff.map(staff => ({
      id: "staff:" + staff.id,
      title: this.makeName(
        staff.name.first,
        staff.name.last,
        options.preferSurnameFirst
      ),
      image: staff.image.large
    }));
  }
}
