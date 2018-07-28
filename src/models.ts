export type MediaId = string;

export type MediaType = "anime" | "manga";

export interface Media {
  id: MediaId;
  title: string;
  image: string;

  overriddenTitle: string;
}
