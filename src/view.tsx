import { h, View } from "hyperapp";
import { State } from "./state";
import { Actions } from "./actions";
import { bingoChart, bingoSettings } from "./views/bingo";

export const view: View<State, Actions> = (state, actions) => (
  <main>
    <form onsubmit={(e) => {
      actions.search.execute();
      actions.search.setVisibility(true);
      e.preventDefault();
    }}>
      <input
        type="text"
        value={state.search.query}
        onfocus={_ => actions.search.setVisibility(true)}
        oninput={e => actions.search.updateQuery(e.target.value)}
      />
      <button type="submit">Search</button>

      <button onclick={e => {
        actions.search.updateQuery("");
        e.preventDefault();
      }}>Clear</button>
    </form>

    <ul style={{ display: (state.search.isVisible ? "block" : "none") }}>
      {
        state.search.results.map((anime) => {
          return (
            <li key={anime.id} onclick={_ => {
              actions.selections.add(anime);
              actions.search.setVisibility(false);
            }}>
              { anime.title }
              <img src={anime.image}/>
            </li>
          );
        })
      }
    </ul>

    <fieldset>
      <legend>Selections</legend>
      <button onclick={_ => actions.selections.shuffle()}>Shuffle</button>
      <ul>
        { state.selections.items.map((anime) => {
          return (
            <li key={anime.id}>
              <button onclick={_ => actions.selections.remove(anime.id)}>delete</button>
              &nbsp;
              {anime.title}
            </li>
          );
        })}
      </ul>
    </fieldset>

    { bingoSettings(state.bingo, actions.bingo) }

    { bingoChart(state, actions) }

    <fieldset>
      <legend>Output</legend>
      <button onclick={_ => actions.bingo.generate()}>Generate image</button>
      <canvas class="js-bingo-output-canvas"/>
    </fieldset>
  </main>
);

