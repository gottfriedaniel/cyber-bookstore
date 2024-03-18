import { fetchBooks } from "@/lib/data";
import { CardsSkeleton } from "@/components/skeletons";
import { Suspense } from "react";
import Book from "@/components/Book";
import Image from "next/image";

interface PageParams {
  params: { category: string };
  searchParams?: {
    query?: string;
    page?: string;
    size?: string;
  };
}

export default async function Page({ params, searchParams }: PageParams) {
  const category = decodeURIComponent(params.category);
  const query = searchParams?.query || "cyber";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.size) || 10;

  const { items = [] } = await fetchBooks(
    `${category}+intitle:${query}`,
    currentPage,
    pageSize
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <Image alt="no data" src="/not-found.png" width="600" height="600" />
        <p className="text-2xl">No items found</p>
      </div>
    );
  }

  return (
    <Suspense key={category + currentPage} fallback={<CardsSkeleton />}>
      <div className="xs:grid-cols-1 grid gap-2 xs:px-4 md:px-16 xs:py-4 md:py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(({ id, volumeInfo }) => (
          <Book key={id} {...volumeInfo} />
        ))}
      </div>
    </Suspense>
  );
}
