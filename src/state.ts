import { Anime } from "./models";

export interface State {
  search: State.Search,
  selections: State.Selections
};


export namespace State {
  export interface Search {
    query: string,
    results: Anime[],
    isVisible: boolean
  }

  export interface Selections {
    items: Anime[]
  }
}

export const initialState = {
  search: {
    query: "",
    results: [],
    isVisible: false
  },
  selections: {
    items: []
  }
};

