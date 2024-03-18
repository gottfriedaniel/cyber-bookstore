import { Volumes } from "@/types/volumes";
import axios from "axios";

const getPageUrl = (
  searchTerm: string,
  startIndex: number,
  maxResults: number
) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`;

export async function fetchBooks(
  searchTerm: string,
  currentPage: number,
  pageSize: number
): Promise<Volumes> {
  if (pageSize === 50) {
    const firstStartIndex = (currentPage - 1) * 25;
    const secondStartIndex = currentPage * 25;
    const [{ data: firstData }, { data: secondData }] = await Promise.all([
      axios<Volumes>(getPageUrl(searchTerm, firstStartIndex, 25)),
      axios<Volumes>(getPageUrl(searchTerm, secondStartIndex, 25)),
    ]);

    const items = (firstData.items || []).concat(secondData.items || []);
    return { ...secondData, items };
  } else {
    const startIndex = (currentPage - 1) * pageSize;
    const response = await axios<Volumes>(
      getPageUrl(searchTerm, startIndex, pageSize)
    );
    return response.data;
  }
}
