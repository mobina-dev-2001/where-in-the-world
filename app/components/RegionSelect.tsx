"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const regions = [
  { id: null, name: "Filter by Region" },
  { id: "Africa", name: "Africa" },
  { id: "Americas", name: "Americas" },
  { id: "Asia", name: "Asia" },
  { id: "Europe", name: "Europe" },
  { id: "Oceania", name: "Oceania" },
];
type Region = { id: string | null; name: string };

export default function RegionSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const regionParams = searchParams.get("region");
  const initialSelected =
    regions.find((r) => r.id === regionParams) || regions[0];

  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (!selected?.id) {
      params.delete("region");
    } else {
      params.set("region", selected.id);
    }

    router.push(`/?${params.toString()}`);
  }, [selected, router, searchParams]);

  function handleSelect(region: Region) {
    if (region.id === selected?.id) {
      setSelected(regions[0]);
    } else {
      setSelected(region);
    }
  }

  return (
    <div className="w-50">
      <Listbox value={selected} onChange={handleSelect}>
        <ListboxButton
          className={clsx(
            "relative block w-full h-[clamp(3rem,9vw,3.5rem)] px-6 bg-white dark:bg-blue-900 rounded-[.313rem] shadow-[0_2px_9px_#0000000E] text-[clamp(.75rem,2vw,.875rem)] text-left",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-grey-400"
          )}
        >
          {selected?.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-1/2 -translate-y-1/2 right-5 size-4 fill-black dark:fill-white"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-(--button-width) p-1.5 bg-white dark:bg-blue-900 rounded-[.313rem] shadow-[0_2px_9px_#0000000E] [--anchor-gap:--spacing(2)] focus:outline-none",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0"
          )}
        >
          {regions.slice(1).map((region) => (
            <ListboxOption
              key={region.name}
              value={region}
              className="group flex items-center gap-2 rounded-[.313rem] py-1.25 px-3 select-none cursor-pointer data-focus:bg-grey-300/50"
            >
              <CheckIcon className="invisible size-3 fill-black dark:fill-white group-data-selected:visible" />
              <div className="text-[clamp(.75rem,2vw,.875rem)]">
                {region.name}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
