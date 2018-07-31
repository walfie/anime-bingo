import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";
import { calculateMaxItems } from "./bingo";

export const selections: View<State, Actions.Selections> = (state, actions) => {
  const maxItems = calculateMaxItems(
    state.bingo.size,
    state.bingo.showFreeSpace
  );

  return (
    <fieldset class="app-selections_container">
      <legend>Selections</legend>
      {state.selections.items.length ? (
        <div>
          <button onclick={_ => actions.shuffle()}>Shuffle</button>
          <button onclick={_ => actions.removeAll()}>Remove all</button>
        </div>
      ) : (
        <div>No items selected.</div>
      )}
      <ol class="app-selections">
        {state.selections.items.map(media => {
          return (
            <li key={media.id}>
              <div class="app-selections__media">
                <button
                  class="app-selections__media-delete"
                  onclick={_ => actions.remove(media.id)}
                >
                  Remove
                </button>
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
                  onclick={_ =>
                    actions.commitEdit({ id: media.id, title: null })
                  }
                >
                  Reset title
                </button>
              </div>
            </li>
          );
        })}
      </ol>
      <span>
        {state.selections.items.length > maxItems
          ? `You have more items than the bingo board can fit! Note that only the first ${maxItems} items will be shown.`
          : "Add items by using the search bar above!"}
      </span>
    </fieldset>
  );
};
