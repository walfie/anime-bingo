import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Anime, Search, AniListSearch } from "./search";

interface State {
  query: string,
  searchResults: [Anime]
};

const defaultState: State = {
  query: "",
  searchResults: [] as [Anime]
};

interface Actions {
  getState: () => (state: State) => ActionResult<State>;
  updateMatches: (searchResults: [Anime]) => (state: State) => ActionResult<State>;
  updateQuery: (query: string) => (state: State) => ActionResult<State>;
  executeSearch: () => (state: State, actions: Actions) => Promise<ActionResult<State>>;
};

const actions = (search: Search): Actions => ({
  getState: () => (state) => { return state; },
  updateQuery: (query: string) => (state: State) => {
    return { query };
  },
  updateMatches: (searchResults: [Anime]) => (state: State) => {
    return { searchResults };
  },
  executeSearch: () => async (state, actions) => {
    const searchResults = await search.searchAnime(state.query);
    actions.updateMatches(searchResults);
  }
});

const view: View<State, Actions> = (state, actions) => (
  <main>
    <form onsubmit={(e) => {
      actions.executeSearch();
      e.preventDefault();
    }}>
      <input
        type="text"
        value={state.query}
        oninput={(e) => actions.updateQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
    <ul>
      {
        state.searchResults.map((anime) => {
          return (
            <li key={anime.id}>
              { anime.title }
              <img src={anime.image}/>
            </li>
          );
        })
      }
    </ul>
  </main>
);

const state = (module.hot.data || {}).state as State || defaultState;
const application = app(state, actions(new AniListSearch()), view, document.body);

if (module.hot) {
  module.hot.dispose(() => {
    module.hot.data.state = application.getState();
  });
}

