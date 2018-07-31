import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";
import { bingoChart, bingoSettings } from "./bingo";
import { searchForm, searchResults } from "./search";
import { selections } from "./selections";
import { custom } from "./custom";
import { MediaType } from "../models";

// Used to detect drag/drop of files
let lastDragTarget = null;

export const view: View<State, Actions> = (state, actions) => (
  <main
    class="app-root"
    ondragenter={e => {
      e.preventDefault();
      lastDragTarget = e.target;
      actions.custom.updateState({ isDragging: true });
    }}
    ondragleave={e => {
      e.preventDefault();
      if (e.target === lastDragTarget || e.target === document) {
        actions.custom.updateState({ isDragging: false });
      }
    }}
    ondragover={e => e.preventDefault()}
    ondrop={e => {
      e.preventDefault();
      const file = (e.dataTransfer.items || [])[0];
      actions.custom.updateState({ isDragging: false });
      actions.custom.validateFile(file.getAsFile());
    }}
  >
    <div
      class="app-overlay"
      style={{ display: state.bingo.showCanvas ? "block" : "none" }}
      onclick={_ => actions.bingo.showCanvas(false)}
    >
      <div class="app-overlay__content">
        <div>To save, right-click + "Save Image As..."</div>
        <div>
          (Not available on all browsers, but known to work in Chrome and
          Firefox)
        </div>
        <canvas class="js-bingo-output-canvas app-bingo__canvas" />
        <div>Click anywhere to exit.</div>
      </div>
    </div>

    <section class="app-search">
      <fieldset class="app-search__mobile-warning">
        <legend>Notice</legend>
        If you're on a mobile device, you might have trouble saving the
        generated image (there might be no "Save as..." option for canvas
        elements). It's recommended to use a desktop browser such as Chrome or
        Firefox.
      </fieldset>

      <fieldset>
        <legend>Search</legend>
        {searchForm(state.search, actions.search)}
        {state.search.error && (
          <div class="app-search__error">{state.search.error}</div>
        )}
        {searchResults(state, actions)}
      </fieldset>

      {selections(state, actions.selections)}

      {custom(state, actions)}

      {bingoSettings(state.bingo, actions.bingo)}

      <fieldset class="app-links">
        <legend>Links</legend>
        <a href="https://twitter.com/walfieee/status/1023422393744859137">
          How to use this site
        </a>
        ・
        <a href="https://anilist.co">AniList</a>
        ・
        <a href="https://github.com/AniList/ApiV2-GraphQL-Docs">AniList API</a>
        ・
        <a href="https://github.com/walfie/anime-bingo">GitHub</a>
      </fieldset>
    </section>

    <section class="app-bingo">
      <div class="app-bingo__generate">
        <button
          class="app-bingo__generate-button"
          onclick={_ => actions.bingo.generate()}
        >
          Render as image
        </button>
      </div>
      {bingoChart(state, actions)}
    </section>
  </main>
);
