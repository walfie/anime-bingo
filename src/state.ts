import { Media, MediaId, MediaType } from "./models";

export interface State {
  search: State.Search;
  selections: State.Selections;
  bingo: State.Bingo;
}

export namespace State {
  export interface Search {
    query: string;
    mediaType: MediaType;
    results: Media[];
    isVisible: boolean;
    isLoading: boolean;
    error: string;
  }

  export interface Selections {
    items: Media[];
  }

  export interface Bingo {
    title: string;
    font: string;
    backgroundColor: string;
    borderColor: string;
    showTitles: boolean;
    showCanvas: boolean;
    showCredit: boolean;
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

    export const initial: Bingo = {
      title: "Anime Bingo",
      font: allFonts[0],
      backgroundColor: "#ffffff",
      borderColor: "#333333",
      showTitles: true,
      showCanvas: false,
      showCredit: true
    };
  }
}

export const initialState: State = {
  search: {
    query: "",
    results: [],
    mediaType: "anime",
    isVisible: false,
    isLoading: false,
    error: null
  },
  selections: {
    items: []
  },
  bingo: State.Bingo.initial
};
