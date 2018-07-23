import { h, app, ActionsType, ActionResult, View } from "hyperapp";
import { Search, AniListSearch } from "./search";
import { State } from "./state";
import { AnimeId, Anime } from "./models";
import * as html2canvas from "html2canvas";

export interface Actions {
  getState: () => (state: State) => ActionResult<State>;
  search: Actions.Search;
  selections: Actions.Selections;
  bingo: Actions.Bingo;
};

export namespace Actions {
  export interface Search {
    setVisibility: (isVisible: boolean) => (state: State.Search) => ActionResult<State.Search>;
    updateQuery: (query: string) => (state: State.Search) => ActionResult<State.Search>;
    updateMatches: (searchResults: [Anime]) => (state: State.Search) => ActionResult<State.Search>;
    execute: () => (state: State.Search, actions: Actions.Search) => Promise<ActionResult<State.Search>>;
  }

  export interface Selections {
    add: (item: Anime) => (state: State.Selections) => ActionResult<State.Selections>;
    remove: (id: AnimeId) => (state: State.Selections) => ActionResult<State.Selections>;
    shuffle: () => (state: State.Selections) => ActionResult<State.Selections>;
  }

  export interface Bingo {
    updateState: (newState: Partial<State.Bingo>) => (state: State.Bingo) => ActionResult<State.Bingo>;
    resetSettings: () => ActionResult<State.Bingo>;
    save: () => (state: State.Bingo) => ActionResult<State.Bingo>;
  }
}


const shuffleArray = <T extends {}>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export const actions = (search: Search): Actions => ({
  getState: () => (state: State) => { return state; },
  search: {
    setVisibility: (isVisible: boolean) => (_) => {
      return { isVisible };
    },
    updateQuery: (query: string) => (_) => {
      return { query };
    },
    updateMatches: (results: [Anime]) => (_) => {
      return { results };
    },
    execute: () => async (state, actions) => {
      const searchResults = await search.searchAnime(state.query);
      actions.updateMatches(searchResults);
    }
  },
  selections: {
    add: (item: Anime) => (state) => {
      // If item already exists, don't add it again
      const items = state.items.find(existing => existing.id == item.id)
        ? state.items
        : state.items.concat(item);

      return { items };
    },
    remove: (id: AnimeId) => (state) => {
      return { items: state.items.filter((item) => item.id != id) };
    },
    shuffle: () => (state) => {
      shuffleArray(state.items);
      return { items: state.items };
    }
  },
  bingo: {
    updateState: (newState: Partial<State.Bingo>) => (oldState) => {
      return newState;
    },
    resetSettings: () => {
      return State.Bingo.initial;
    },
    save: () => (state) => {
      const elem = document.querySelector(".js-bingo-container") as HTMLElement;

      document.body.appendChild(generate());
      /*
      html2canvas(elem, { allowTaint: true }).then((canvas) => {
        document.body.appendChild(canvas);
      });
       */

      return state;
    }
  }
});

function generate() {
  var table = document.querySelector('.js-bingo-container') as HTMLElement;

  // Sometimes canvas gets cut off at the bottom. TODO
  //table.style.height = table.offsetHeight + 5 + 'px';

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = table.offsetWidth;
  canvas.height = table.offsetHeight;
  canvas.style.maxWidth = '100%';

  var svg = makeSvg(table);
  var svgString = new XMLSerializer().serializeToString(svg);

  var domUrl = window.URL || (window as any).webkitURL || window;
  var img = new Image();
  var svgBlob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'});
  var url = domUrl.createObjectURL(svgBlob);

  console.log(url);
  img.crossOrigin = "Anonymous"; // TODO: Figure out tainted canvas
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    domUrl.revokeObjectURL(url);
  }

  return canvas;
}

function makeSvg(content) {
  var d = document;

  var ns = 'http://www.w3.org/2000/svg';

  var svg = d.createElementNS(ns, 'svg');
  svg.setAttribute('width', content.offsetWidth);
  svg.setAttribute('height', content.offsetHeight);

  var fo = d.createElementNS(ns, 'foreignObject');
  fo.setAttribute('width', '100%');
  fo.setAttribute('height', '100%');
  svg.appendChild(fo);

  var div = d.createElement('div');
  div.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  div.appendChild(content);
  fo.appendChild(div);

  return svg;
}
