import { h, View } from "hyperapp";
import { State } from "./state";
import { Actions } from "./actions";
import { bingoChart, bingoSettings } from "./views/bingo";

export const view: View<State, Actions> = (state, actions) => (
  <main class="app-root">
    {searchForm(state.search, actions.search)}
    {searchResults(state, actions)}
    {selections(state.selections, actions.selections)}

    {bingoSettings(state.bingo, actions.bingo)}

    {bingoChart(state, actions)}

    <fieldset>
      <legend>Output</legend>
      <button onclick={_ => actions.bingo.generate()}>Generate image</button>
      <canvas class="js-bingo-output-canvas" />
    </fieldset>
  </main>
);

export const searchForm: View<State.Search, Actions.Search> = (
  state,
  actions
) => (
  <form
    onsubmit={e => {
      actions.execute();
      actions.setVisibility(true);
      e.preventDefault();
    }}
  >
    <input
      type="text"
      value={state.query}
      onfocus={_ => actions.setVisibility(true)}
      oninput={e => actions.updateQuery(e.target.value)}
    />
    <button type="submit">Search</button>

    <button
      onclick={e => {
        actions.updateQuery("");
        e.preventDefault();
      }}
    >
      Clear
    </button>
  </form>
);

export const searchResults: View<State, Actions> = (state, actions) => (
  <ul style={{ display: state.search.isVisible ? "block" : "none" }}>
    {state.search.results.map(anime => {
      return (
        <li
          key={anime.id}
          onclick={_ => {
            actions.selections.add(anime);
            actions.search.setVisibility(false);
          }}
        >
          {anime.title}
          <img src={anime.image} />
        </li>
      );
    })}
  </ul>
);

export const selections: View<State.Selections, Actions.Selections> = (
  state,
  actions
) => (
  <fieldset>
    <legend>Selections</legend>
    <button onclick={_ => actions.shuffle()}>Shuffle</button>
    <ul>
      {state.items.map(anime => {
        return (
          <li key={anime.id}>
            <button onclick={_ => actions.remove(anime.id)}>delete</button>
            &nbsp;
            {anime.title}
          </li>
        );
      })}
    </ul>
  </fieldset>
);
