import { Media } from "./models";

export interface Search {
  searchMedia(query: string): Promise<[Media]>;
}

export class AniListSearch implements Search {
  private baseUrl = "https://graphql.anilist.co/";
  private animeQuery: string = `
   query($page: Int = 1, $perPage: Int = 10, $search: String) {
      page: Page(page: $page, perPage: $perPage) {
        anime: media(search: $search, sort: SEARCH_MATCH, type: ANIME) {
          id
          title { romaji }
          coverImage { large }
        }
      }
    }`;

  public async searchMedia(query: string): Promise<[Media]> {
    const body: any = {
      query: this.animeQuery,
      variables: {
        page: 1,
        perPage: 10,
        search: query
      }
    };

    const result = await fetch(this.baseUrl, {
      method: "POST",
      headers: new Headers([
        ["accept", "application/json"],
        ["content-type", "application/json"]
      ]),
      body: JSON.stringify(body)
    });

    const json = await result.json();

    // TODO: Catch
    return json.data.page.anime.map(anime => ({
      id: anime.id,
      title: anime.title.romaji,
      image: anime.coverImage.large
    }));
  }
}
