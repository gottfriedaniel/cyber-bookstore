import { Book as BookData, ImageLinks } from "@/types/book";
import Image from "next/image";

function getFirstAvailableLink(links: ImageLinks): string | null {
  const linkEntries = Object.entries(links);
  for (const [key, value] of linkEntries) {
    if (value) {
      return value;
    }
  }
  return null;
}

const Book = ({ title, imageLinks }: BookData["volumeInfo"]) => {
  const imageUrl: string =
    getFirstAvailableLink(imageLinks || {}) || "/no-cover.png";
  return (
    <div className="relative flex flex-col justify-between cursor-pointer">
      <Image
        src={imageUrl}
        alt={`${title} cover image`}
        width="200"
        height="300"
        className="object-contain"
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
      />
      <p
        className="h-12 line-clamp-2 p-1 hover:text-blue-800 hover:underline"
        title={title}
      >
        {title}
      </p>
    </div>
  );
};

export default Book;
