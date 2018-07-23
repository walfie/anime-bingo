import { h, View } from "hyperapp";
import { State } from "../state";
import { Actions } from "../actions";

// Break an array up into smaller arrays of fixed size
const chunkArray = <T extends {}>(array: T[], chunkSize: number): T[][] => {
  let arrays: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    arrays.push(array.slice(i, i + chunkSize))
  }

  return arrays;
}

const maxRows = 5;
const maxCols = 5;
const cellWidth = 150;
const cellHeight = 150;
const cellPadding = 10;

const maxItems = maxRows * maxCols - 1;
const middleIndex = Math.floor(maxRows * maxCols / 2);

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
      inner = [<div class="app-bingo__cell-text">{item.title}</div>];
      style = { backgroundImage: `url(${item.image})` };
    } else if (index == middleIndex) {
      style = {
        color: state.bingo.backgroundColor,
        backgroundColor: state.bingo.borderColor
      };

      inner = [<div class="app-bingo__cell-free">FREE</div>];
    } else {
      inner = [];
    }

    return (
      <td class="app-bingo__cell" style={style}>
        <div class="app-bingo__cell-contents">{inner}</div>
      </td>
    );
  });

  const title = "Title of this bingo card";

  const tableStyles = {
    borderColor: state.bingo.borderColor,
    backgroundColor: state.bingo.backgroundColor,
    fontFamily: state.bingo.font
  };

  return (
    <table class="app-bingo__container" style={tableStyles}>
      <th class="app-bingo__header" colSpan={maxCols}>
        {title}
      </th>
      {
        chunkArray(cells, maxRows).map((rowItems) => (
          <tr>{rowItems}</tr>
        ))
      }
    </table>
  );
}

