import { Book as BookData, ImageLinks } from '@/app/types/Book';
import Image from 'next/image';
import { useState } from 'react';
import { ImageSkelaton } from '../skeletons';

function getFirstAvailableLink(links: ImageLinks): string | null {
  const linkEntries = Object.entries(links);
  for (const [key, value] of linkEntries) {
    if (value) {
      return value;
    }
  }
  return null;
}

const Book = ({ title, imageLinks }: BookData['volumeInfo']) => {
  const imageUrl: string =
    getFirstAvailableLink(imageLinks || {}) || '/no-cover.png';
  return (
    <div className="relative border border-gray-200">
      <Image
        src={imageUrl}
        alt={`${title} cover image`}
        width="0"
        height="0"
        sizes="100vw"
        className="h-[160px] w-full object-contain"
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
      />
      {/* {!loaded && <ImageSkelaton />} */}
      <p className="line-clamp-2 border-t border-gray-200 p-1" title={title}>
        {title}
      </p>
    </div>
  );
};

export default Book;
