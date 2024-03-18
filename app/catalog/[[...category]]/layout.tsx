import Categories from "@/components/Categories";
import { lusitana } from "@/lib/fonts";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:overflow-hidden">
      <div className="pt-8 xs:px-4 md:px-16">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>
            Cyber-Themed Bookstore
          </h1>
          <Search placeholder="Search books..." />
        </div>
        <div className="mt-4">
          <Categories />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
      <div className="flex py-4 w-full items-center justify-center border-t shadow-2xl dark:bg-black bg-white">
        <Pagination totalPages={50} />
      </div>
    </div>
  );
}
