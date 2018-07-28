import { h, View } from "hyperapp";
import { State } from "./state";
import { Actions } from "./actions";
import { bingoChart, bingoSettings } from "./views/bingo";

export const view: View<State, Actions> = (state, actions) => (
  <main class="app-root">
    <section class="app-search">
      <fieldset>
        <legend>Search</legend>
        {searchForm(state.search, actions.search)}
        {state.search.error && (
          <div class="app-search__error">{state.search.error}</div>
        )}
        {searchResults(state, actions)}
      </fieldset>
      {selections(state.selections, actions.selections)}
    </section>

    <section class="app-bingo">
      {bingoSettings(state.bingo, actions.bingo)}

      {bingoChart(state, actions)}

      <fieldset>
        <legend>Output</legend>
        <button onclick={_ => actions.bingo.generate()}>Generate image</button>
        <canvas class="js-bingo-output-canvas" />
      </fieldset>
    </section>
  </main>
);

export const searchForm: View<State.Search, Actions.Search> = (
  state,
  actions
) => (
  <form
    class="app-search__form"
    onsubmit={e => {
      actions.execute();
      actions.setVisibility(true);
      e.preventDefault();
    }}
  >
    <input
      type="text"
      class="app-search__form_input"
      placeholder="Search by title"
      value={state.query}
      onfocus={_ => actions.setVisibility(true)}
      oninput={e => actions.updateQuery(e.target.value)}
    />
    <button class="app-search__form_button" type="submit">
      {state.isLoading ? " \u23F3" : "Search"}
    </button>

    <button
      class="app-search__form_button"
      onclick={e => {
        actions.updateQuery("");
        actions.updateMatches([]);
        actions.setVisibility(false);
        e.preventDefault();
      }}
    >
      Clear
    </button>
  </form>
);

export const searchResults: View<State, Actions> = (state, actions) => (
  <details
    open={state.search.isVisible}
    ontoggle={e => actions.search.setVisibility(e.srcElement.open)}
  >
    <summary>Search results</summary>
    <ul class="app-search__results">
      {state.search.results.length == 0 ? "No results" : null}
      {state.search.results.map(media => {
        return (
          <li
            class="app-search__result"
            key={media.id}
            onclick={_ => {
              actions.selections.add(media);
              actions.search.setVisibility(false);
            }}
          >
            <div
              class="app-search__result-image"
              style={{ backgroundImage: `url(${media.image})` }}
            />
            <span class="app-search__result-title">{media.title}</span>
          </li>
        );
      })}
    </ul>
  </details>
);

export const selections: View<State.Selections, Actions.Selections> = (
  state,
  actions
) => (
  <fieldset>
    <legend>Selections</legend>
    {state.items.length ? (
      <div>
        <button onclick={_ => actions.shuffle()}>Shuffle</button>
        <button onclick={_ => actions.removeAll()}>Remove all</button>
      </div>
    ) : (
      <div>No items selected.</div>
    )}
    <ol class="app-selections">
      {state.items.map(media => {
        return (
          <li key={media.id}>
            <div class="app-selections__media">
              <input
                class="app-selections__media-title"
                value={media.overriddenTitle}
                placeholder={media.title}
                oninput={e =>
                  actions.commitEdit({ id: media.id, title: e.target.value })
                }
              />
              <button
                style={{
                  display: media.overriddenTitle ? "inline" : "none"
                }}
                onclick={_ => actions.commitEdit({ id: media.id, title: null })}
              >
                Reset title
              </button>
              <button onclick={_ => actions.remove(media.id)}>Remove</button>
            </div>
          </li>
        );
      })}
    </ol>
    <span>Add items by using the search bar above!</span>
  </fieldset>
);
