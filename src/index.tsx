import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Anime, Search, AniListSearch } from "./search";
import { State, initialState } from "./state";
import { Actions, actions } from "./actions";

const view: View<State, Actions> = (state, actions) => (
  <main>
    <form onsubmit={(e) => {
      actions.search.execute();
      e.preventDefault();
    }}>
      <input
        type="text"
        value={state.search.query}
        oninput={(e) => actions.search.updateQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
    <ul>
      {
        state.search.results.map((anime) => {
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

const state = (module.hot.data || {}).state as State || initialState;
const application = app(state, actions(new AniListSearch()), view, document.body);

if (module.hot) {
  module.hot.dispose(() => {
    module.hot.data.state = application.getState();
  });
}

