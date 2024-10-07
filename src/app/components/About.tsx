import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-6 sm:p-12 md:p-24"
    id="Bio">
      <div className="flex md:flex-col lg:flex-row border-2 rounded-lg min-h-full w-full">
        {/* Image Section */}
        <div className="relative about-picture h-full w-full lg:w-2/6 flex justify-start items-start p-0 lg:p-0">
          <Image
            src="/assets/images/headshot.jpg"
            alt="Zama Phungula"
            // fill={true}
            width={341}
            height={192}
            className="rounded h-full w-full lg:max-h-[500px] object-left object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-start gap-4 p-6 md:p-8">
          {/* About Me Heading */}
          <p className="text-3xl sm:text-4xl lg:text-5xl text-left">
            About Me
          </p>

          {/* About Me Content */}
          <p className="text-xs sm:text-sm lg:text-lg text-left">
            I am a Full Stack Software Engineer always looking to expand my
            skills. I initially began my journey as a Front-End Developer but I
            have since expanded my skillset to the backend as well. I also have
            skills in UI/UX design that would benefit any position I fill,
            being competent with Figma, graphic design with Gimp, and video
            editing with Premiere Pro. I am also a polyglot, having learned
            multiple languages over the years such as French, Japanese, and
            Latin, so when I'm not coding, I'm usually looking to expand on my
            linguistic studies as well as being an avid gamer.
          </p>

          {/* Skills Heading */}
          <p className="text-3xl sm:text-4xl lg:text-5xl text-left">
            Skills
          </p>

          {/* Skills Content */}
          <p className="text-xs sm:text-sm lg:text-lg text-left">
            HTML/CSS | Javascript/Typescript | PHP | Python | C# | <br />
            Tailwind | Bootstrap | React | Next.Js | MySQL | MongoDB |
            ExpressJS | NodeJS | <br />
          </p>
        </div>
      </div>
    </div>
  );
}
