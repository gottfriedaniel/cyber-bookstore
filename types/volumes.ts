import { Book } from "./book";

export type Volumes = {
  kind: "books#volumes";
  totalItems: number;
  items: Book[];
};
