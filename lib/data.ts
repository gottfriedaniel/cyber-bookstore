import { Volumes } from "@/types/volumes";

const getUrl = (searchTerm: string, startIndex: number, maxResults: number) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyBBcrdfswVgRLZhUeizPBVsQcu2Kno_QKs`;

export async function fetchBooks(
  searchTerm: string,
  currentPage: number,
  pageSize: number
): Promise<Volumes> {
  // console.log({ searchTerm, currentPage, startIndex, pageSize });

  if (pageSize === 50) {
    const firstStartIndex = (currentPage - 1) * 25;
    const secondStartIndex = currentPage * 25;
    const [first, second] = await Promise.all([
      fetch(getUrl(searchTerm, firstStartIndex, 25)),
      fetch(getUrl(searchTerm, secondStartIndex, 25)),
    ]);
    const firstData: Volumes = await first.json();
    const secondData: Volumes = await second.json();
    const items = firstData.items.concat(secondData.items);
    return { ...secondData, items };
  } else {
    const startIndex = (currentPage - 1) * pageSize;
    const response = await fetch(getUrl(searchTerm, startIndex, pageSize));
    return await response.json();
  }
}
