"use client";
// import { Volumes } from "@/types/Volumes";
// import Book from "@/components/Book";
// // import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { useCallback, useContext, useState } from "react";
// // import { useRouter } from "next/router";
// import Pagination from "@/components/Pagination";
// import { NextURL } from "next/dist/server/web/next-url";
// import { GetStaticProps } from "next";
// import { AppProps } from "next/app";

// interface CatalogProps extends AppProps {
//   params: Record<string, string>;
//   searchParams: Record<string, string>;
// }

// export default async function Catalog({ searchParams, ...rest }: CatalogProps) {
//   // const [page, setPage] = useState(0);
//   // const [pageSize, setPageSize] = useState(10);
//   // const router = useRouter();
//   // const searchParams = router.query;
//   // console.log(searchParams);
//   // const { page, size } = searchParams;
//   // const pathname = usePathname();
//   // const searchParams = useSearchParams();

//   const params = new URLSearchParams(searchParams);
//   const page = parseInt(params.get("page") || "1");
//   const size = parseInt(params.get("size") || "10");

//   const { items, totalPages, pageSize } = await getBooks({ page, size });

//   // const createQueryString = useCallback(
//   //   (name: string, value: string) => {
//   //     const params = new URLSearchParams(searchParams.toString());
//   //     params.set(name, value);
//   //     return params.toString();
//   //   },
//   //   [searchParams]
//   // );

//   const handlePageSizeChange = (size: number) => {
//     console.log(size);

//     // router.push(
//     //   `${router.pathname}?page=${searchParams.page}&size=${searchParams.size}`
//     // );
//   };

//   return (
//     <>
//       <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {items.map(({ id, volumeInfo }) => (
//           <Book key={id} {...volumeInfo} />
//         ))}
//       </div>
//       <Pagination
//         currentPage={page}
//         totalPages={totalPages}
//         pageSize={pageSize}
//         handlePageSizeChange={handlePageSizeChange}
//       />
//     </>
//   );

//   // const createQueryString = useCallback(
//   //   (name: string, value: string) => {
//   //     const params = new URLSearchParams(searchParams.toString());
//   //     params.set(name, value);

//   //     return params.toString();
//   //   },
//   //   [searchParams]
//   // );

//   // const handlePageSizeChange = (size: number) => {
//   //   router.push(
//   //     `${pathname}?${createQueryString(
//   //       "maxResults",
//   //       size.toString()
//   //     )}&${createQueryString("startIndex", "0")}`
//   //   );
//   // };

//   // const fetchProjects = (page = 0, pageSize = 10) => {
//   //   const startIndex = page * pageSize;
//   //   return fetch(
//   //     `https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=${pageSize}&startIndex=${startIndex}`
//   //   ).then((res) => res.json());
//   // };

//   // const { isPending, isError, error, data, isFetching, isPlaceholderData } =
//   //   useQuery<Volumes>({
//   //     queryKey: ["projects", page, pageSize],
//   //     queryFn: () => fetchProjects(page, pageSize),
//   //     placeholderData: keepPreviousData,
//   //   });

//   // const hasMore = data && page * pageSize + pageSize < data.totalItems;

//   // return (
//   //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
//   //     <div>
//   //       {isPending ? (
//   //         <div>Loading...</div>
//   //       ) : isError ? (
//   //         <div>Error: {error.message}</div>
//   //       ) : (
//   //         <>
//   //           <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//   //             {data.items.map(({ id, volumeInfo }) => (
//   //               <Book key={id} {...volumeInfo} />
//   //             ))}
//   //           </div>
//   //           <Pagination
//   //             currentPage={page}
//   //             totalPages={Math.ceil(data.totalItems / pageSize)}
//   //             pageSize={pageSize}
//   //             handlePageSizeChange={handlePageSizeChange}
//   //           />
//   //         </>
//   //       )}
//   //       <span>Current Page: {page + 1}</span>
//   //       <button
//   //         onClick={() => setPage((old) => Math.max(old - 1, 0))}
//   //         disabled={page === 0}
//   //       >
//   //         Previous Page
//   //       </button>{" "}
//   //       <button
//   //         onClick={() => {
//   //           if (!isPlaceholderData && hasMore) {
//   //             setPage((old) => old + 1);
//   //           }
//   //         }}
//   //         // Disable the Next Page button until we know a next page is available
//   //         disabled={isPlaceholderData || !hasMore}
//   //       >
//   //         Next Page
//   //       </button>
//   //       {isFetching ? <span> Loading...</span> : null}{" "}
//   //     </div>
//   //   </main>
//   // );
// }

// export async function getBooks({
//   page = 1,
//   size = 10,
// }: {
//   page: number;
//   size: number;
// }) {
//   // Fetch your items based on query.page, query.size, and calculate total pages

//   // For demonstration, let's assume we have some dummy data
//   // const pageSize = parseInt(size); // default page size is 10
//   // const currentPage = parseInt(page);
//   const startIndex = page * size;
//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=${size}&startIndex=${startIndex}`
//   );
//   const { totalItems, items }: Volumes = await res.json();
//   // const totalItems = volumes.totalItems; // total number of items available
//   const totalPages = Math.ceil(totalItems / size);

//   // Assuming you fetch data from an API or database based on page and page size
//   // Implement your actual data fetching logic here

//   // For demonstration, we'll create dummy items
//   // const items = Array.from({ length: pageSize }, (_, index) => `Item ${index + 1} (Page ${currentPage})`);

//   return {
//     items,
//     currentPage: page,
//     totalPages: Math.ceil(totalItems / size),
//     pageSize: size,
//   };
// }

// pages/index.js
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [maxResults] = useState(10);
  const router = useRouter();

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`
      );
      setBooks(response.data.items);
      setTotalItems(response.data.totalItems);
      setError(null);
    } catch (error) {
      setError("Error fetching books. Please try again later.");
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = () => {
    setStartIndex(0);
    fetchBooks();
  };

  const handleNextPage = () => {
    setStartIndex(startIndex + maxResults);
    fetchBooks();
  };

  const handlePrevPage = () => {
    setStartIndex(Math.max(0, startIndex - maxResults));
    fetchBooks();
  };

  const handleBookClick = (id) => {
    router.push(`/book/${id}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <div>
        {books.map((book) => (
          <div key={book.id} onClick={() => handleBookClick(book.id)}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors.join(", ")}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={startIndex === 0}>
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={startIndex + maxResults >= totalItems}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;
