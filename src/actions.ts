import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Anime, Search, AniListSearch } from "./search";
import { State } from "./state";

export interface Actions {
  getState: () => (state: State) => ActionResult<State>;
  search: Actions.Search;
};

export namespace Actions {
  export interface Search {
    updateQuery: (query: string) => (state: State.Search) => ActionResult<State.Search>;
    updateMatches: (searchResults: [Anime]) => (state: State.Search) => ActionResult<State.Search>;
    execute: () => (state: State.Search, actions: Actions.Search) => Promise<ActionResult<State.Search>>;
  }
}

export const actions = (search: Search): Actions => ({
  getState: () => (state: State) => { return state; },
  search: {
    updateQuery: (query: string) => (state: State.Search) => {
      return { query };
    },
    updateMatches: (results: [Anime]) => (state: State.Search) => {
      return { results };
    },
    execute: () => async (state, actions) => {
      const searchResults = await search.searchAnime(state.query);
      actions.updateMatches(searchResults);
    }
  }
});

