import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Search, AniListSearch } from "./search";
import { State } from "./state";
import { MediaId, Media } from "./models";
import * as html2canvas from "html2canvas";

export interface Actions {
  getState: () => (state: State) => ActionResult<State>;
  search: Actions.Search;
  selections: Actions.Selections;
  bingo: Actions.Bingo;
}

export namespace Actions {
  export interface Search {
    setVisibility: (
      isVisible: boolean
    ) => (state: State.Search) => ActionResult<State.Search>;
    updateQuery: (
      query: string
    ) => (state: State.Search) => ActionResult<State.Search>;
    updateMatches: (
      searchResults: Media[]
    ) => (state: State.Search) => ActionResult<State.Search>;
    execute: () => (
      state: State.Search,
      actions: Actions.Search
    ) => Promise<ActionResult<State.Search>>;
  }

  export interface Selections {
    add: (
      item: Media
    ) => (state: State.Selections) => ActionResult<State.Selections>;
    remove: (
      id: MediaId
    ) => (state: State.Selections) => ActionResult<State.Selections>;
    shuffle: () => (state: State.Selections) => ActionResult<State.Selections>;
    commitEdit: (
      _: { id: MediaId; title: string }
    ) => (state: State.Selections) => ActionResult<State.Selections>;
  }

  export interface Bingo {
    updateState: (
      newState: Partial<State.Bingo>
    ) => (state: State.Bingo) => ActionResult<State.Bingo>;
    resetSettings: () => ActionResult<State.Bingo>;
    generate: () => (state: State.Bingo) => ActionResult<State.Bingo>;
  }
}

const shuffleArray = <T extends {}>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

export const actions = (search: Search): Actions => ({
  getState: () => (state: State) => {
    return state;
  },
  search: {
    setVisibility: (isVisible: boolean) => _ => {
      return { isVisible };
    },
    updateQuery: (query: string) => _ => {
      return { query };
    },
    updateMatches: (results: [Media]) => _ => {
      return { results };
    },
    execute: () => async (state, actions) => {
      const searchResults = await search.searchMedia(state.query);
      actions.updateMatches(searchResults);
    }
  },
  selections: {
    add: (item: Media) => state => {
      // If item already exists, don't add it again
      const items = state.items.find(existing => existing.id == item.id)
        ? state.items
        : state.items.concat(item);

      return { items };
    },
    remove: (id: MediaId) => state => {
      return { items: state.items.filter(item => item.id != id) };
    },
    shuffle: () => state => {
      shuffleArray(state.items);
      return { items: state.items };
    },
    commitEdit: ({ id, title }) => state => {
      state.items.forEach(item => {
        if (item.id == id) {
          item.title = title;
        }
      });
      return { items: state.items };
    }
  },
  bingo: {
    updateState: (newState: Partial<State.Bingo>) => oldState => {
      return newState;
    },
    resetSettings: () => {
      return State.Bingo.initial;
    },
    generate: () => state => {
      const input = document.querySelector(".js-bingo-table") as HTMLElement;
      const output = document.querySelector(
        ".js-bingo-output-canvas"
      ) as HTMLElement;

      html2canvas(input, {
        allowTaint: true,
        canvas: output
      });

      return state;
    }
  }
});
