import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

export default function NotFound() {
  return (
    <main className="flex justify-between items-center">
      <div className="flex-1">
        <p className="uppercase">Error 404</p>
            <h1 className="text-[4rem] text-shadow-[-10px_10px_0_#00e6e6,-20px_20px_0_#01cccc]">
          Page not found!
        </h1>
        <p>The page you're looking for could not be found.</p>
        <Link
          className="flex justify-center items-center gap-2 max-w-max h-[clamp(2rem,6vw,2.5rem)] mt-10 p-5 bg-white dark:bg-blue-900 rounded-[2px] shadow-[0_0_7px_#0000001A] focus:outline-2 focus:outline-grey-400 text-[clamp(.875rem,2vw,1rem)] font-light cursor-pointer"
          href="/"
        >
          <ArrowUturnLeftIcon className="h-[clamp(1.061rem,3vw,1.326rem)]" />
          Return Home
        </Link>
      </div>
      <div className="flex-[.75]">
        <img src="/animated-404-illustration.svg" alt="" aria-hidden="true" />
      </div>
    </main>
  );
}
