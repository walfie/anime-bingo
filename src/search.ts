import { Media, MediaType } from "./models";

export interface Search {
  searchMedia(query: string, mediaType: MediaType): Promise<[Media]>;
}

export class AniListSearch implements Search {
  private baseUrl = "https://graphql.anilist.co";
  private query: string = `
   query($page: Int = 1, $perPage: Int = 10, $search: String, $type: MediaType, $sort: [MediaSort]) {
      page: Page(page: $page, perPage: $perPage) {
        media: media(search: $search, sort: $sort, type: $type) {
          id
          title { romaji }
          coverImage { large }
        }
      }
    }`;

  public async searchMedia(
    query: string,
    mediaType: MediaType
  ): Promise<[Media]> {
    const body: any = {
      query: this.query,
      variables: {
        page: 1,
        perPage: 10,
        search: query,
        type: mediaType.toUpperCase(),
        sort: ["POPULARITY_DESC", "SEARCH_MATCH"]
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
    return json.data.page.media.map(media => ({
      id: mediaType + media.id,
      title: media.title.romaji,
      image: media.coverImage.large
    }));
  }
}
