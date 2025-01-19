"use client";
import { Search } from "lucide-react";
import {
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import SearchFilters from "./search-filters";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, 300);

  return (
    <div className="relative">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
        placeholder="Search..."
        className="bg-input py-4 px-12 rounded-lg w-full"
      />
      <Search className="absolute left-3 top-4" />
      <SearchFilters className="absolute right-3 top-4" />
    </div>
  );
}
