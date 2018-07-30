import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";
import { MediaType } from "../models";

export const searchForm: View<State.Search, Actions.Search> = (
  state,
  actions
) => (
  <form
    class="app-search__form"
    onsubmit={e => {
      actions.execute();
      e.preventDefault();
    }}
  >
    <div class="app-search__form-row">
      <select
        class="app-search__form-media"
        onchange={e => {
          actions.updateState({ mediaType: e.target.value });
          state.query && actions.execute();
        }}
      >
        {["anime", "manga", "character", "staff"].map(
          (mediaType: MediaType) => (
            <option value={mediaType} selected={state.mediaType == mediaType}>
              {mediaType}
            </option>
          )
        )}
      </select>

      <input
        type="text"
        class="app-search__form-input"
        placeholder="Search by title"
        value={state.query}
        onfocus={_ => actions.setVisibility(true)}
        oninput={e => actions.updateQuery(e.target.value)}
      />

      <button class="app-search__form-button" type="submit">
        {state.isLoading ? " \u23F3" : "Search"}
      </button>
    </div>

    <div class="app-search__form-row app-search__form-row--secondary">
      {(state.mediaType === "anime" || state.mediaType === "manga") && (
        <label>
          <input
            type="checkbox"
            checked={state.preferEnglish}
            onchange={e => {
              actions.updateState({ preferEnglish: e.target.checked });
              state.query && actions.execute();
            }}
          />
          Prefer English title
        </label>
      )}
      {(state.mediaType === "character" || state.mediaType === "staff") && (
        <label>
          <input
            type="checkbox"
            checked={state.preferSurnameFirst}
            onchange={e => {
              actions.updateState({ preferSurnameFirst: e.target.checked });
              state.query && actions.execute();
            }}
          />
          Eastern name order (surname first)
        </label>
      )}
    </div>
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
