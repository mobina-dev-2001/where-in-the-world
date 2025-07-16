import CountryList from "./components/CountryList";

type Country = {
  flags: { svg: string; alt: string };
  name: { common: string };
  cca3: string;
  capital: string[];
  region: string;
  population: number;
};

export default async function Home() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,cca3,capital,region,population",
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  const countries: Country[] = await res.json();

  return <CountryList countries={countries} />;
}
