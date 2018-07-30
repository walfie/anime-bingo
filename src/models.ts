export type MediaId = string;

export type MediaType = "anime" | "manga" | "character" | "staff";

export interface Media {
  id: MediaId;
  title: string;
  image: string;

  overriddenTitle: string;
}
