import { Anime } from "./search";

export interface State {
  search: State.Search
};


export namespace State {
  export interface Search {
    query: string,
    results: [Anime],
    visible: boolean
  }
}

export const initialState = {
  search: {
    query: "",
    results: [] as [Anime],
    visible: false
  }
};

