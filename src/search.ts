import { Anime } from "./models";

export interface Search {
  searchAnime(query: string): Promise<[Anime]>;
};

export class AniListSearch implements Search {
  private baseUrl = "https://graphql.anilist.co/";
  private animeQuery: string = `
   query($page: Int = 1, $perPage: Int = 10, $search: String) {
      Page(page: $page, perPage: $perPage) {
        anime: media(search: $search, sort: SEARCH_MATCH, type: ANIME) {
          id
          title { romaji }
          coverImage { large }
        }
      }
    }`;

  public async searchAnime(query: string): Promise<[Anime]> {
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
    return json.data.Page.anime.map((anime) => ({
      id: anime.id,
      title: anime.title.romaji,
      image: anime.coverImage.large
    }));
  }
};

