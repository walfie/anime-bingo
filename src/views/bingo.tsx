import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";

// Break an array up into smaller arrays of fixed size
const chunkArray = <T extends {}>(array: T[], chunkSize: number): T[][] => {
  let arrays: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    arrays.push(array.slice(i, i + chunkSize));
  }

  return arrays;
};

const maxRows = 5;
const maxCols = 5;
const cellWidth = 150;
const cellHeight = 150;
const cellPadding = 10;

const maxItems = maxRows * maxCols - 1;
const middleIndex = Math.floor((maxRows * maxCols) / 2);

export const bingoChart: View<State, Actions> = (state, actions) => {
  // Take the first x items in the items array
  const selectedItems = state.selections.items.slice(0, maxItems);

  const items = new Array(maxItems).fill(null);
  items.splice(0, selectedItems.length, ...selectedItems);
  items.splice(middleIndex, 0, null);

  const cells = items.map((item, index) => {
    let inner;
    let style: any = { borderColor: state.bingo.borderColor };

    if (item) {
      inner = [
        <div class="app-bingo__cell-text">
          {item.overriddenTitle || item.title}
        </div>
      ];
      style = {
        ...style,
        backgroundImage: `url(${item.image})`
      };
    } else if (index == middleIndex) {
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
    backgroundColor: state.bingo.backgroundColor,
    fontFamily: state.bingo.font
  };

  const headerStyles = {
    color: state.bingo.borderColor
  };

  return (
    <div class="app-bingo__container">
      <table class="js-bingo-table app-bingo__table" style={tableStyles}>
        <th class="app-bingo__header" style={headerStyles} colSpan={maxCols}>
          {state.bingo.title}
        </th>
        {chunkArray(cells, maxRows).map(rowItems => (
          <tr class="app-bingo__row">{rowItems}</tr>
        ))}
      </table>
    </div>
  );
};

export const bingoSettings: View<State.Bingo, Actions.Bingo> = (
  state,
  actions
) => (
  <fieldset>
    <legend>Bingo display settings</legend>

    <label>
      Font
      <select
        onchange={e => actions.updateState({ font: e.target.value })}
        value={state.font}
      >
        {State.Bingo.allFonts.map(font => <option value={font}>{font}</option>)}
      </select>
    </label>

    <label>
      Title
      <input
        for="settingsTitle"
        type="text"
        value={state.title}
        oninput={e => actions.updateState({ title: e.target.value })}
      />
    </label>

    <label>
      Border Color
      <input
        for="settingsBorderColor"
        type="color"
        value={state.borderColor}
        onchange={e => actions.updateState({ borderColor: e.target.value })}
      />
    </label>

    <label>
      Background Color
      <input
        for="settingsBackgroundColor"
        type="color"
        value={state.backgroundColor}
        onchange={e => actions.updateState({ backgroundColor: e.target.value })}
      />
    </label>

    <button onclick={_ => actions.resetSettings()}>Reset</button>
  </fieldset>
);
