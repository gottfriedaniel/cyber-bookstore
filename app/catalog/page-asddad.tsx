import { fetchBooks } from "@/lib/data";
import { CardsSkeleton } from "@/components/skeletons";
import { Suspense } from "react";
import Book from "@/components/Book";

interface PageParams {
  searchParams?: {
    query?: string;
    page?: string;
    size?: string;
  };
}

export default async function Page({ searchParams }: PageParams) {
  const query = "cyber";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.size) || 10;

  const { items } = await fetchBooks(query, currentPage, pageSize);

  return (
    <Suspense key={query + currentPage} fallback={<CardsSkeleton />}>
      <div className="xs:grid-cols-1 grid gap-2 xs:px-4 md:px-16 xs:py-4 md:py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items?.map(({ id, volumeInfo }) => (
          <Book key={id} {...volumeInfo} />
        ))}
      </div>
    </Suspense>
  );
}
