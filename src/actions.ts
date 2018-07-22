import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Search, AniListSearch } from "./search";
import { State } from "./state";
import { AnimeId, Anime } from "./models";

export interface Actions {
  getState: () => (state: State) => ActionResult<State>;
  search: Actions.Search;
  selections: Actions.Selections;
};

export namespace Actions {
  export interface Search {
    setVisibility: (isVisible: boolean) => (state: State.Search) => ActionResult<State.Search>;
    updateQuery: (query: string) => (state: State.Search) => ActionResult<State.Search>;
    updateMatches: (searchResults: [Anime]) => (state: State.Search) => ActionResult<State.Search>;
    execute: () => (state: State.Search, actions: Actions.Search) => Promise<ActionResult<State.Search>>;
  }

  export interface Selections {
    add: (item: Anime) => (state: State.Selections) => ActionResult<State.Selections>;
    remove: (id: AnimeId) => (state: State.Selections) => ActionResult<State.Selections>;
  }
}

export const actions = (search: Search): Actions => ({
  getState: () => (state: State) => { return state; },
  search: {
    setVisibility: (isVisible: boolean) => (_) => {
      return { isVisible };
    },
    updateQuery: (query: string) => (_) => {
      return { query };
    },
    updateMatches: (results: [Anime]) => (_) => {
      return { results };
    },
    execute: () => async (state, actions) => {
      const searchResults = await search.searchAnime(state.query);
      actions.updateMatches(searchResults);
    }
  },
  selections: {
    add: (item: Anime) => (state) => {
      // If item already exists, don't add it again
      const items = state.items.find(existing => existing.id == item.id)
        ? state.items
        : state.items.concat(item);

      return { items };
    },
    remove: (id: AnimeId) => (state) => {
      return { items: state.items.filter((item) => item.id != id) };
  }
});

