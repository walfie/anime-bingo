import { h, View } from "hyperapp";
import { State } from "./state";
import { Actions } from "./actions";

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

    <hr/>
    Selections
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
    { bingoChart(state, actions) }
  </main>
);

const chunkArray = <T extends {}>(array: T[], chunkSize: number): T[][] => {
  let arrays: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    arrays.push(array.slice(i, i + chunkSize))
  }

  return arrays;
}

export const bingoChart: View<State, Actions> = (state, actions) => {
  // TODO: Configurable
  const maxRows = 5;
  const maxCols = 5;
  const cellWidth = 150;
  const cellHeight = 150;
  const cellPadding = 10;
  const maxLineHeight = 40;

  const maxItems = maxRows * maxCols - 1;

  const middleIndex = Math.floor(maxRows * maxCols / 2);

  const tdStyle = {
    border: '8px solid black',
    background: 'white',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "background-position": "50%",
  };

  const cellStyle = {
    width: cellWidth + "px",
    height: cellHeight + "px",
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    boxSizing: "border-box",
    padding: cellPadding + "px",
    overflow: "hidden"
  };

  // TODO: Enforce at search time
  // Take the first x items
  const selectedItems = state.selections.items.slice(0, maxItems);

  const items = new Array(maxItems).fill(null);
  items.splice(0, selectedItems.length, ...selectedItems);
  items.splice(middleIndex, 0, null);

  const cells = items.map((item, index) => {
    let inner;
    let style = tdStyle;

    if (item) {
      inner = [
        <div style={{
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "5px",
          "border-radius": "20px"
        }}>{item.title}</div>
      ];

      style = {
        ...tdStyle,
        background: `url(${item.image})`
      };
    } else if (index == middleIndex) {
      inner = [<span>FREE</span>];
    } else {
      inner = [];
    }

    return (
      <td style={style}>
        <div style={cellStyle}>{inner}</div>
      </td>
    );
  });

  return (
    <table style={{"border-collapse": "collapse"}}>
    {
      chunkArray(cells, maxRows).map((rowItems) => (
        <tr>{rowItems}</tr>
      ))
    }
    </table>
  );
}

