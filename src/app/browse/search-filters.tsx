"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ChallengeSearchFilters } from "@/use-cases/types";
import { SlidersHorizontal } from "lucide-react";
import {
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchFiltersProps = {
  className?: string;
};

export default function SearchFilters({
  className,
}: SearchFiltersProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [tags, setTags] = useState<string>(
    searchParams.get("tags") || "",
  );
  const [areTagsInvalid, setAreTagsInvalid] = useState(false);

  const handleFilterChange = (
    filter: keyof ChallengeSearchFilters,
    value?: string,
  ) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(filter, value);
    } else {
      params.delete(filter);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleTagsChange = useDebouncedCallback((value: string) => {
    const pattern = /^[a-zA-Z0-9]*(,[a-zA-Z0-9]+)*$/;
    if (!pattern.test(value)) {
      setAreTagsInvalid(true);
      return;
    }
    setAreTagsInvalid(false);
    handleFilterChange("tags", value);
  }, 300);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <SlidersHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          Tags
          <br />
          <span
            className={`font-normal text-xs ${areTagsInvalid ? "text-red-500" : ""}`}
          >
            {areTagsInvalid
              ? "Invalid formatting"
              : "Separated by commas"}
          </span>
        </DropdownMenuLabel>
        <div className="px-2 py-1.5">
          <input
            type="text"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
              handleTagsChange(e.target.value);
            }}
            className="bg-input h-6 py-4 px-2 rounded-lg"
          />
        </div>
        <DropdownMenuSeparator />
        <p className="text-xs text-muted px-2 py-1.5">
          More filters to come
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
