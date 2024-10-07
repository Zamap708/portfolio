import Image from "next/image";
import React from "react";

export default function Project(props: any) {
  return (
    <div className="relative peer grayscale hover:grayscale-0 group border hover:mt-10 text-white border-black rounded-lg m-0 p-4 flex flex-col items-center justify-center duration-500 transition-all ease-in-out overflow-hidden">
      <span className="ease absolute rounded left-0 top-0 h-0 w-0 border-t-[3px] transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute rounded right-0 top-0 h-0 w-0 border-r-[3px] transition-all duration-200 delay-[200ms] group-hover:h-full"></span>
      <span className="ease absolute rounded bottom-0 right-0 h-0 w-0 border-b-[3px] transition-all duration-200 delay-[400ms] group-hover:w-full"></span>
      <span className="ease absolute rounded bottom-0 left-0 h-0 w-0 border-l-[3px] transition-all duration-200 delay-[600ms] group-hover:h-full"></span>
      
      <div className="peer z-20">
        <Image
          src={props.image}
          alt={props.name}
          width={683}
          height={384}
          className="rounded"
        />
      </div>

      <div className="-translate-y-full max-w-[700px] group-hover:translate-y-0 overflow-y-hidden opacity-100 duration-300 delay-300 flex flex-col justify-between items-center transition-all ease-out">
        <div className="h-2/3 flex flex-col gap-2 p-4">
          {/* Responsive heading */}
          <h2 className="relative text-lg sm:text-xl md:text-2xl pb-1 h-fit opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 delay-[700ms]">
            <span className="ease absolute rounded left-0 bottom-0 h-0 w-0 border-t-2 transition-all duration-300 delay-[900ms] group-hover:w-full"></span>
            {props.name}
          </h2>

          {/* Responsive paragraph */}
          <p className="opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 delay-[700ms] text-xs sm:text-sm md:text-base">
            {props.description}
          </p>
        </div>

        <div className="w-full group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in delay-[500ms] h-1/3 flex justify-center items-end gap-4 lg:gap-6 ">
          <a href={props.url} className="delay-0" target="_blank" rel="noreferrer">
            <button className="relative p-2 sm:p-3 border border-black text-white rounded overflow-hidden">
              <p className="opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 delay-[800ms] text-xs sm:text-sm md:text-base">
                Visit Website
              </p>
              <span className="ease absolute rounded left-0 top-0 h-0 w-0 border-t-2 transition-all duration-100 delay-[600ms] group-hover:w-full"></span>
              <span className="ease absolute rounded right-0 top-0 h-0 w-0 border-r-2 transition-all duration-100 delay-[700ms] group-hover:h-full"></span>
              <span className="ease absolute rounded bottom-0 right-0 h-0 w-0 border-b-2 transition-all duration-100 delay-[800ms] group-hover:w-full"></span>
              <span className="ease absolute rounded bottom-0 left-0 h-0 w-0 border-l-2 transition-all duration-100 delay-[900ms] group-hover:h-full"></span>
            </button>
          </a>

          <a href={props.git} className="" target="_blank" rel="noreferrer">
            <button className="relative p-2 sm:p-3 border border-black text-white rounded overflow-hidden">
              <p className="opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 delay-[800ms] text-xs sm:text-sm md:text-base">
                View Code
              </p>
              <span className="ease absolute rounded left-0 top-0 h-0 w-0 border-t-2 transition-all duration-100 delay-[600ms] group-hover:w-full"></span>
              <span className="ease absolute rounded right-0 top-0 h-0 w-0 border-r-2 transition-all duration-100 delay-[700ms] group-hover:h-full"></span>
              <span className="ease absolute rounded bottom-0 right-0 h-0 w-0 border-b-2 transition-all duration-100 delay-[800ms] group-hover:w-full"></span>
              <span className="ease absolute rounded bottom-0 left-0 h-0 w-0 border-l-2 transition-all duration-100 delay-[900ms] group-hover:h-full"></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
