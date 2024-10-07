import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative w-screen min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('assets/images/home-bg.jpg')" }}
    >
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-8 bg-black/50 rounded-lg">
        <span className="ease absolute rounded left-0 top-0 origin-center h-1 w-full border-t-[2px] animate-Wgrow"></span>
        <span className="ease absolute rounded right-0 top-0 h-full w-full border-r-[2px] animate-Hgrow"></span>
        <span className="ease absolute rounded bottom-0 right-0 h-1 w-full border-b-[2px] animate-Wgrow"></span>
        <span className="ease absolute rounded bottom-0 left-0 h-full w-full border-l-[2px] animate-Hgrow"></span>

        <div className="h-full w-full md:w-1/2 p-6 md:p-12 text-left">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">
              Zama <br /> Phungula
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl">
              Full Stack Developer <br />
              UI/UX Designer
            </h2>
          </div>
          <div className="social-media-links relative z-50">
            <a href="https://github.com/Zamap708" target="_blank">
              <div
                className="github icon"
                style={{ backgroundImage: "url('assets/images/github.png')" }}
              ></div>
            </a>
            <a href="https://www.linkedin.com/in/zama-phungula-562a991a3/">
              <div
                className="linkedin icon"
                style={{ backgroundImage: "url('assets/images/linkedin.png')" }}
              ></div>
            </a>
            <a href="mailto: zamafphungula@gmail.com">
              <div
                className="email icon"
                style={{ backgroundImage: "url('assets/images/email.png')" }}
              ></div>
            </a>
          </div>
        </div>

        <div className="h-full w-full md:w-1/2 p-6 md:p-12 my-6 md:my-0 z-20">
          <ul className="flex flex-col md:items-start w-full md:w-1/2">
            <li className="text-xl md:text-2xl px-3 py-2 border-b-2 w-fit hover:bg-yellow-400/80 hover:w-full hover:px-6 transition-all ease-out delay-100 duration-300 cursor-pointer">
              <Link href="#Bio">Bio</Link>
            </li>
            <li className="text-xl md:text-2xl px-3 py-2 border-b-2 w-fit hover:bg-yellow-400 hover:w-full hover:px-6 transition-all ease-out delay-100 duration-300 cursor-pointer">
              <Link href="#Projects">Projects</Link>
            </li>
            {/* <li className="text-xl md:text-2xl px-3 py-2 border-b-2 w-fit hover:bg-yellow-400 hover:w-full hover:px-6 transition-all ease-out delay-100 duration-300 cursor-pointer">
              <Link href="#">Contact Me</Link>
            </li> */}
            <li className="text-xl md:text-2xl px-3 py-2 border-b-2 w-fit hover:bg-yellow-400 hover:w-full hover:px-6 transition-all ease-out delay-100 duration-300 cursor-pointer">
              <Link href="/assets/downloads/Zama F Phungula CV.pdf">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
