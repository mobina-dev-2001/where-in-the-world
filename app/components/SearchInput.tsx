"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`);
  }

  return (
    <label className="flex items-center gap-6 w-120 max-sm:w-full h-[clamp(3rem,9vw,3.5rem)] px-8 bg-white dark:bg-blue-900 transition-outline outline-0 focus-within:outline-2 focus-within:outline-grey-400 rounded-[.313rem] shadow-[0_2px_9px_#0000000E] text-grey-400 dark:text-white">
      <svg
        className="h-[1.1rem] max-sm:h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        className="grow placeholder:text-grey-400 dark:placeholder:text-white placeholder:text-[clamp(.75rem,2vw,.875rem)] focus:outline-none"
        placeholder="Search for a country…"
        type="search"
        defaultValue={searchParams.get("search") ?? ""}
        onChange={handleSearch}
      />
    </label>
  );
}
