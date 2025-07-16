import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import PageBackButton from "@/app/components/PageBackButton";

type Props = {
  params: { code: string };
};

type CountryDetails = {
  name: { common: string; nativeName: Record<string, { common: string }> };
  tld: string[];
  currencies: Record<string, { name: string }>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  population: number;
  flags: { svg: string; alt: string };
};

countries.registerLocale(enLocale);

export default async function CountryDetails({ params }: Props) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) throw new Error("Failed to fetch country details");
  const [country]: CountryDetails[] = await res.json();

  const nativeNameKeys = Object.keys(country.name.nativeName);
  const lastKey = nativeNameKeys[nativeNameKeys.length - 1];

  return (
    <main className="grid gap-[clamp(3.5rem,11vw,5rem)] max-sm:gap-16 text-[clamp(.875rem,2vw,1rem)]">
      <PageBackButton />

      <div className="flex max-lg:flex-col justify-between items-center gap-[clamp(3rem,9vw,3.5rem)] w-full">
        <div className="lg:flex-1 max-w-[35.611rem]">
          <img
            className="aspect-7/5 object-cover rounded-xl"
            src={country.flags.svg}
            alt={country.flags.alt}
          />
        </div>
        <div className="lg:flex-1 font-light">
          <h1 className="mb-[clamp(1rem,10vw,1.5rem)] text-[clamp(1.5rem,4vw,2rem)] font-extrabold">
            {country.name.common}
          </h1>
          <div className="flex max-sm:flex-col justify-between gap-8 mb-[clamp(2rem,6vw,4rem)] leading-[2rem]">
            <div>
              <p>
                <strong className="font-semibold">Native Name: </strong>
                {country.name.nativeName[lastKey].common}
              </p>
              <p>
                <strong className="font-semibold">Population: </strong>
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong className="font-semibold">Region: </strong>
                {country.region}
              </p>
              <p>
                <strong className="font-semibold">Sub Region: </strong>
                {country.subregion}
              </p>
              <p>
                <strong className="font-semibold">Capital: </strong>
                {country.capital.join(", ")}
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold">Top Level Domain: </strong>
                {country.tld.join(", ")}
              </p>
              <p>
                <strong className="font-semibold">Currencies: </strong>
                {Object.values(country.currencies)
                  .map((c) => c.name)
                  .join(", ")}
              </p>
              <p>
                <strong className="font-semibold">Languages: </strong>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start gap-4">
            <p className="text-[1rem] font-semibold text-nowrap">
              Border Countries:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[clamp(.75rem,2vw,.875rem)]">
              {country.borders?.length ? (
                country.borders.map((code, i) => (
                  <div
                    key={i}
                    className="grid place-items-center min-w-24 h-7 bg-white dark:bg-blue-900 rounded-[2px] shadow-[0_0_4px_1px_#0000001B]"
                  >
                    <span>
                      {countries.getName(code, "en")}
                    </span>
                  </div>
                ))
              ) : (
                <span className="opacity-75 italic">
                  Does not share a land border with any country.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
