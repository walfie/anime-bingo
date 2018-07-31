import { Media, MediaId, MediaType } from "./models";

export interface State {
  search: State.Search;
  selections: State.Selections;
  custom: State.Custom;
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
    preferEnglish: boolean;
    preferSurnameFirst: boolean;
  }

  export interface Selections {
    items: Media[];
  }

  export interface Custom {
    title: string;
    imageUrl: string;
    file: File;
    isError: boolean; // Can't really tell what the reason was
    isDragging: boolean;
  }

  export interface Bingo {
    title: string;
    font: string;
    backgroundColor: string;
    borderColor: string;
    showTitles: boolean;
    showCanvas: boolean;
    showCredit: boolean;
    showFreeSpace: boolean;
    size: number;
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
      showCredit: true,
      showFreeSpace: true,
      size: 5
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
    error: null,
    preferEnglish: false,
    preferSurnameFirst: false
  },
  selections: {
    items: []
  },
  custom: {
    title: "",
    imageUrl: null,
    file: null,
    isError: false,
    isDragging: false
  },
  bingo: State.Bingo.initial
};
