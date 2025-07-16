"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import SearchInput from "./SearchInput";
import RegionSelect from "./RegionSelect";

type Countries = {
  flags: { svg: string; alt: string };
  name: { common: string };
  cca3: string;
  capital: string[];
  region: string;
  population: number;
};

export default function CountryList({ countries }: { countries: Countries[] }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase() ?? "";
  const region = searchParams.get("region");

  const filtered = countries.filter((c) => {
    const matchesSearch = c.name.common.toLowerCase().includes(search);
    const matchesRegion = region ? c.region === region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <div className="flex max-sm:flex-col justify-between items-center max-sm:items-start gap-2 max-sm:gap-10 mb-12 max-sm:mb-8">
        <SearchInput />
        <RegionSelect />
      </div>

      <main className="flex flex-wrap justify-center gap-[clamp(2.5rem,8vw,4.5rem)]">
        {filtered.map((country) => (
          <motion.div
            key={country.cca3}
            whileHover={{
              y: -15,
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link
              href={`/country/${country.cca3.toLowerCase()}`}
              className="block w-61 bg-white dark:bg-blue-900 rounded-[.313rem] shadow-[0_0_7px_2px_#0000001A] overflow-hidden focus:outline-2 focus:outline-grey-400"
            >
              <img
                className="w-full h-40 object-cover"
                src={country.flags.svg}
                alt={country.flags.alt}
              />
              <div className="pt-6 pb-12 px-6 font-light">
                <h2 className="mb-4 text-lg font-extrabold">
                  {country.name.common}
                </h2>
                <p>
                  <strong className="font-semibold">Population: </strong>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong className="font-semibold">Region: </strong>
                  {country.region}
                </p>
                <p>
                  <strong className="font-semibold">Capital: </strong>
                  {country.capital.join(", ")}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </main>
    </>
  );
}
