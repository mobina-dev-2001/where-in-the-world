import { GlobeAsiaAustraliaIcon } from "@heroicons/react/20/solid";

export default function Loading() {
  const loaderStyles =
    "absolute bg-linear-[0deg,rgba(50,50,50,.2)_0%,rgba(100,100,100,.2)_100%] border-t-1 border-[#646464] rounded-full shadow-[0_10px_10px_0_rgba(0,0,0,.3)] backdrop-blur-[5px] animate-ripple";

  return (
    <div className="fixed inset-0 z-100 grid place-items-center bg-white dark:bg-blue-900">
      <div className="relative grid place-items-center h-62.5 aspect-square">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-106 grid place-items-center w-15 animate-color-change">
          <GlobeAsiaAustraliaIcon />
        </div>

        <div className={`${loaderStyles} z-105 w-[25%] aspect-1/1`}></div>
        <div
          className={`${loaderStyles} inset-[30%] z-104 border-[rgba(100,100,100,.8)]`}
          style={{ animationDelay: ".2s" }}
        ></div>
        <div
          className={`${loaderStyles} inset-[20%] z-103 border-[rgba(100,100,100,.6)]`}
          style={{ animationDelay: ".4s" }}
        ></div>
        <div
          className={`${loaderStyles} inset-[10%] z-102 border-[rgba(100,100,100,.4)]`}
          style={{ animationDelay: ".6s" }}
        ></div>
        <div
          className={`${loaderStyles} inset-0 z-101 border-[rgba(100,100,100,.2)]`}
          style={{ animationDelay: ".8s" }}
        ></div>
      </div>
    </div>
  );
}
