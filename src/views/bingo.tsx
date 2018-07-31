import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";

const sourceUrl =
  document.location.host + document.location.pathname.replace(/\/$/, "");

// Break an array up into smaller arrays of fixed size
const chunkArray = <T extends {}>(array: T[], chunkSize: number): T[][] => {
  let arrays: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    arrays.push(array.slice(i, i + chunkSize));
  }

  return arrays;
};

export const calculateMaxItems = (
  size: number,
  showFreeSpace: boolean
): number => {
  const freeSpaceExists = showFreeSpace && size % 2 != 0;
  return size * size - (freeSpaceExists ? 1 : 0);
};

export const bingoChart: View<State, Actions> = (state, actions) => {
  const maxItems = calculateMaxItems(
    state.bingo.size,
    state.bingo.showFreeSpace
  );

  // Don't show a free space if the size is an even number
  // TODO: Dedupe this math logic somewhere
  const middleIndex: number | null =
    state.bingo.showFreeSpace && state.bingo.size % 2 != 0
      ? Math.floor((state.bingo.size * state.bingo.size) / 2)
      : null;

  // Take the first x items in the items array
  const selectedItems = state.selections.items.slice(0, maxItems);

  const items = new Array(maxItems).fill(null);
  items.splice(0, selectedItems.length, ...selectedItems);

  middleIndex && items.splice(middleIndex, 0, null);

  const cells = items.map((item, index) => {
    let inner = [];
    let style: any = { borderColor: state.bingo.borderColor };

    if (item) {
      if (state.bingo.showTitles) {
        inner = [
          <div class="app-bingo__cell-text">
            {item.overriddenTitle || item.title}
          </div>
        ];
      }
      style = {
        ...style,
        backgroundImage: `url(${item.image})`
      };
    } else if (index === middleIndex) {
      style = {
        ...style,
        color: state.bingo.backgroundColor,
        backgroundColor: state.bingo.borderColor,
        verticalAlign: "middle"
      };

      inner = [<div class="app-bingo__cell-free">FREE</div>];
    } else {
      style = { ...style, backgroundColor: state.bingo.backgroundColor };
      inner = [];
    }

    return (
      <td class="app-bingo__cell" style={style}>
        {inner}
      </td>
    );
  });

  const tableStyles = {
    borderColor: state.bingo.borderColor,
    backgroundColor: state.bingo.borderColor,
    fontFamily: state.bingo.font
  };

  const headerStyles = {
    color: state.bingo.borderColor,
    backgroundColor: state.bingo.backgroundColor
  };

  const footerStyles = {
    color: state.bingo.backgroundColor,
    backgroundColor: state.bingo.borderColor,
    display: state.bingo.showCredit ? "block" : "none"
  };

  return (
    <div
      class="js-bingo-container app-bingo__container"
      onclick={_ => actions.bingo.generate()}
    >
      <table class="app-bingo__table" style={tableStyles}>
        <thead>
          <th
            class="app-bingo__header"
            style={headerStyles}
            colSpan={state.bingo.size}
          >
            {state.bingo.title}
          </th>
        </thead>
        <tbody>
          {chunkArray(cells, state.bingo.size).map(rowItems => (
            <tr class="app-bingo__row">{rowItems}</tr>
          ))}
        </tbody>
      </table>
      <div class="app-bingo__credit" style={footerStyles}>
        {sourceUrl}
      </div>
    </div>
  );
};

export const bingoSettings: View<State.Bingo, Actions.Bingo> = (
  state,
  actions
) => (
  <fieldset class="app-bingo_settings">
    <legend>Bingo display settings</legend>

    <label class="app-bingo_settings__label">
      <span>Title</span>
      <input
        type="text"
        value={state.title}
        oninput={e => actions.updateAndPersistState({ title: e.target.value })}
      />
    </label>

    <label class="app-bingo_settings__label">
      <span>Size</span>
      <select
        onchange={e =>
          actions.updateAndPersistState({ size: parseInt(e.target.value) })
        }
        value={state.size}
      >
        {[3, 4, 5, 6, 7].map(size => (
          <option value={size}>
            {size} x {size}
          </option>
        ))}
      </select>
    </label>

    <label class="app-bingo_settings__label">
      <span>Font</span>
      <select
        onchange={e => actions.updateAndPersistState({ font: e.target.value })}
        value={state.font}
      >
        {State.Bingo.allFonts.map(font => <option value={font}>{font}</option>)}
      </select>
    </label>

    <label class="app-bingo_settings__label">
      <span>Border Color</span>
      <input
        type="color"
        value={state.borderColor}
        onchange={e =>
          actions.updateAndPersistState({ borderColor: e.target.value })
        }
      />
    </label>

    <label class="app-bingo_settings__label">
      <span>Background Color</span>
      <input
        type="color"
        value={state.backgroundColor}
        onchange={e =>
          actions.updateAndPersistState({ backgroundColor: e.target.value })
        }
      />
    </label>

    <label class="app-bingo_settings__label">
      <span>Show titles/names</span>
      <input
        type="checkbox"
        checked={state.showTitles}
        onchange={e =>
          actions.updateAndPersistState({ showTitles: e.target.checked })
        }
      />
    </label>

    <label class="app-bingo_settings__label">
      <span>Show URL in footer</span>
      <input
        type="checkbox"
        checked={state.showCredit}
        onchange={e =>
          actions.updateAndPersistState({ showCredit: e.target.checked })
        }
      />
    </label>

    <label class="app-bingo_settings__label">
      <span>Show free space</span>
      <input
        type="checkbox"
        checked={state.showFreeSpace}
        onchange={e =>
          actions.updateAndPersistState({ showFreeSpace: e.target.checked })
        }
      />
    </label>

    <button onclick={_ => actions.resetSettings()}>Reset</button>
  </fieldset>
);
