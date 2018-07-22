import { h, View } from "hyperapp";
import { State } from "./state";
import { Actions } from "./actions";

export const view: View<State, Actions> = (state, actions) => (
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

