import { Anime, AnimeId } from "./models";

export interface State {
  search: State.Search;
  selections: State.Selections;
  bingo: State.Bingo;
}

export namespace State {
  export interface Search {
    query: string;
    results: Anime[];
    isVisible: boolean;
  }

  export interface Selections {
    items: Anime[];
  }

  export interface Bingo {
    title: string;
    font: string;
    backgroundColor: string;
    borderColor: string;
  }

  export namespace Bingo {
    export const allFonts = [
      "Arial, Helvetica, sans-serif",
      "'Arial Black', Gadget, sans-serif",
      "'Comic Sans MS', Textile, cursive",
      "'Courier New', Courier, monospace",
      "Georgia, 'Times New Roman', Times, serif",
      "Impact, Charcoal, sans-serif",
      "'Lucida Console', Monaco, monospace",
      "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
      "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
      "Tahoma, Geneva, sans-serif",
      "'Times New Roman', Times, serif",
      "'Trebuchet MS', Helvetica, sans-serif",
      "Verdana, Geneva, sans-serif",
      "'MS Sans Serif', Geneva, sans-serif",
      "'MS Serif', 'New York', serif"
    ];

    export const initial = {
      title: "Anime Bingo",
      font: allFonts[0],
      backgroundColor: "#ffffff",
      borderColor: "#333333"
    };
  }
}

export const initialState = {
  search: {
    query: "",
    results: [],
    isVisible: false
  },
  selections: {
    items: []
  },
  bingo: State.Bingo.initial
};
