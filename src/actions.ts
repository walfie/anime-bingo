import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Search, AniListSearch } from "./search";
import { State } from "./state";
import { MediaId, Media } from "./models";
import * as html2canvas from "html2canvas";

const storageKey = "animeBingo";
const storageField = {
  selections: "selections",
  bingo: "bingo"
};

const persist = (fieldKey: string, value: any) => {
  let item = JSON.parse(localStorage.getItem(storageKey) || "{}");
  item[fieldKey] = value;
  localStorage.setItem(storageKey, JSON.stringify(item));
};

export const loadStorage = (fieldKey: string): any => {
  return JSON.parse(localStorage.getItem(storageKey) || "{}")[fieldKey];
};

const validateImageUrl = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = e => reject(e);
    img.src = url;
  });
};

const validateImageFile = async (file: File): Promise<string> => {
  let img = new Image();
  const url = URL.createObjectURL(file);

  try {
    return await validateImageUrl(url);
  } catch (err) {
    URL.revokeObjectURL(url);
    throw err;
  }
};

const randomId = (): string => {
  return Math.random()
    .toString()
    .substr(2);
};

export interface Actions {
  getState: () => (state: State) => ActionResult<State>;
  search: Actions.Search;
  selections: Actions.Selections;
  custom: Actions.Custom;
  bingo: Actions.Bingo;
}

export namespace Actions {
  export interface Search {
    updateState: (
      newState: Partial<State.Search>
    ) => ActionResult<State.Search>;
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
    persistState: () => (
      state: State.Selections
    ) => ActionResult<State.Selections>;
    loadState: () => ActionResult<State.Selections>;
    updateState: (
      newState: Partial<State.Selections>
    ) => ActionResult<State.Selections>;
    add: (
      item: Media
    ) => (
      state: State.Selections,
      actions: Actions.Selections
    ) => ActionResult<State.Selections>;
    remove: (
      id: MediaId
    ) => (
      state: State.Selections,
      actions: Actions.Selections
    ) => ActionResult<State.Selections>;
    removeAll: () => (
      state: State.Selections,
      actions: Actions.Selections
    ) => ActionResult<State.Selections>;
    shuffle: () => (
      state: State.Selections,
      actions: Actions.Selections
    ) => ActionResult<State.Selections>;
    commitEdit: (
      _: { id: MediaId; title: string }
    ) => (
      state: State.Selections,
      actions: Actions.Selections
    ) => ActionResult<State.Selections>;
  }

  export interface Custom {
    updateState: (
      newState: Partial<State.Custom>
    ) => ActionResult<State.Custom>;
    validateFile: (
      file: File
    ) => (
      state: State.Custom,
      actions: Actions.Custom
    ) => Promise<ActionResult<State.Custom>>;
    validateInput: (
      callback: ((_: Media) => void)
    ) => (
      state: State.Custom,
      actions: Actions.Custom
    ) => Promise<ActionResult<State.Custom>>;
  }

  export interface Bingo {
    persistState: () => (state: State.Bingo) => ActionResult<State.Bingo>;
    loadState: () => ActionResult<State.Bingo>;
    showCanvas: (show: boolean) => ActionResult<State.Bingo>;
    updateState: (newState: Partial<State.Bingo>) => ActionResult<State.Bingo>;
    updateAndPersistState: (
      newState: Partial<State.Bingo>
    ) => (
      state: State.Bingo,
      actions: Actions.Bingo
    ) => ActionResult<State.Bingo>;
    resetSettings: () => (
      state: State.Bingo,
      actions: Actions.Bingo
    ) => ActionResult<State.Bingo>;
    generate: () => (
      state: State.Bingo,
      actions: Actions.Bingo
    ) => ActionResult<State.Bingo>;
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
    updateState: newState => {
      return newState;
    },
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
      actions.updateState({ isLoading: true, error: null });
      try {
        const searchResults = await search.searchMedia(
          state.query,
          state.mediaType
        );
        actions.updateMatches(searchResults);
        actions.setVisibility(true);
      } catch (err) {
        actions.updateState({ error: err.toString() });
      } finally {
        actions.updateState({ isLoading: false });
      }
    }
  },
  selections: {
    updateState: newState => {
      return newState;
    },
    persistState: () => state => {
      persist(storageField.selections, state);
    },
    loadState: () => {
      return loadStorage(storageField.selections);
    },
    add: (item: Media) => (state, actions) => {
      // If item already exists, don't add it again
      const items = state.items.find(existing => existing.id == item.id)
        ? state.items
        : state.items.concat(item);

      actions.updateState({ items });
      actions.persistState();
    },
    remove: (id: MediaId) => (state, actions) => {
      const newItems = state.items.filter(item => {
        const shouldKeep = item.id != id;
        if (!shouldKeep) {
          URL.revokeObjectURL(item.image);
        }
        return shouldKeep;
      });
      actions.updateState({ items: newItems });
      actions.persistState();
    },
    removeAll: () => (state, actions) => {
      if (confirm("Remove all items?")) {
        state.items.forEach(item => URL.revokeObjectURL(item.image));
        actions.updateState({ items: [] });
      } else {
        actions.updateState({});
      }
      actions.persistState();
    },
    shuffle: () => (state, actions) => {
      shuffleArray(state.items);
      actions.updateState({ items: state.items });
      actions.persistState();
    },
    commitEdit: ({ id, title }) => (state, actions) => {
      state.items.forEach(item => {
        if (item.id == id) {
          item.overriddenTitle = title;
        }
      });
      actions.updateState({ items: state.items });
      actions.persistState();
    }
  },
  custom: {
    updateState: newState => {
      if (newState.imageUrl === "") {
        newState.isError = false;
      }
      return newState;
    },
    validateFile: file => async (state, actions) => {
      try {
        const url = await validateImageFile(file);
        actions.updateState({ imageUrl: url, isError: false });
      } catch (err) {
        actions.updateState({ isError: true });
      }
    },
    validateInput: callback => async (state, actions) => {
      try {
        const url = await validateImageUrl(state.imageUrl);

        actions.updateState({
          imageUrl: "",
          title: "",
          file: null,
          isError: false
        });

        callback({
          id: "custom:" + randomId(),
          title: state.title,
          image: url,
          overriddenTitle: null
        });
      } catch (err) {
        actions.updateState({ isError: true });
      }
    }
  },
  bingo: {
    persistState: () => state => {
      persist(storageField.bingo, state);
    },
    loadState: () => {
      return loadStorage(storageField.bingo);
    },
    updateAndPersistState: newState => (_, actions) => {
      actions.updateState(newState);
      actions.persistState();
    },
    updateState: newState => {
      return newState;
    },
    resetSettings: () => (_, actions) => {
      actions.updateAndPersistState(State.Bingo.initial);
    },
    generate: () => (state, actions) => {
      const input = document.querySelector(
        ".js-bingo-container"
      ) as HTMLElement;
      const output = document.querySelector(
        ".js-bingo-output-canvas"
      ) as HTMLElement;

      html2canvas(input, {
        allowTaint: true,
        canvas: output,
        backgroundColor: state.borderColor,
        scale: Math.max(1, window.devicePixelRatio)
      }).then(_ => {
        actions.showCanvas(true);
      });
    },
    showCanvas: show => {
      return { showCanvas: show };
    }
  }
});
