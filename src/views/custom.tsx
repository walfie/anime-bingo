import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";

const isSecure = window.location.protocol === "https:";
const errorMessage = (state: State.Custom): string => {
  if (state.isError) {
    const maybeInsecure = isSecure && state.imageUrl.startsWith("http:");
    const extra = maybeInsecure ? " that is available over HTTPS" : "";

    return `Could not load image. Please check that the file/URL is a valid image${extra}.`;
  } else {
    return null;
  }
};

export const custom: View<State, Actions> = (state, actions) => (
  <fieldset class="app-custom">
    <legend>Custom</legend>
    <form
      onsubmit={e => {
        e.preventDefault();
        actions.custom.validateInput(actions.selections.add);
      }}
    >
      <div class="app-custom__explanation">
        Add your own items! Note that local files might not persist after a page
        refresh.
      </div>
      <div class="app-custom__error">{errorMessage(state.custom)}</div>
      <label class="app-custom__label">
        <span>Title</span>
        <input
          class="app-custom__input"
          type="text"
          placeholder="Custom title"
          value={state.custom.title}
          oninput={e => actions.custom.updateState({ title: e.target.value })}
        />
      </label>
      <label class="app-custom__label">
        <span>Image URL</span>
        <input
          type="text"
          class="app-custom__input"
          placeholder="https://example.com/image.png"
          value={state.custom.imageUrl}
          oninput={e =>
            actions.custom.updateState({ imageUrl: e.target.value })
          }
        />
        <button
          type="button"
          onclick={e => {
            e.preventDefault();
            (document.querySelector(".js-file-input") as HTMLElement).click();
          }}
        >
          Select local image
        </button>
      </label>
      <input
        class="js-file-input"
        style={{ display: "none" }}
        type="file"
        onchange={e => actions.custom.validateFile(e.target.files[0])}
      />
      <button type="submit">Submit</button>
    </form>
  </fieldset>
);
