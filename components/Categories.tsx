"use client";

import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

const categories: string[] = [
  "Cyberpunk",
  "Cybersecurity",
  "Artificial Intelligence",
  "Virtual Reality",
  "Augmented Reality",
  "Robotics",
  "Data Science",
  "Cryptography",
];

export default function Categories() {
  const params = useParams<{ category?: string }>();
  const currentCategory = decodeURIComponent(params?.category ?? "");

  return (
    <ul className="kg:flex-wrap group flex justify-between overflow-x-auto border-y border-gray-200 md:flex-nowrap">
      {categories.map((category) => (
        <li
          key={category}
          className={clsx(
            "flex w-full flex-1 items-center justify-center whitespace-nowrap py-2 text-center after:h-4 after:border-r after:last:border-r-0 hover:bg-blue-600 hover:text-white",
            {
              "bg-blue-600 text-white": currentCategory === category,
            }
          )}
        >
          <Link href={`/catalog/${category}`} className="w-full px-2">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
