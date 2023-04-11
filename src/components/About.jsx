import React from "react";
import "./about.css"

export default function About() {
    return (
        <div className="about" id="about">
            
            <div className="about-content">
                
                <div className="about-picture"></div>
    
                <div className="about-text-wrapper">
                    <p className="about-heading">About Me</p> 
                    <p className="about-text">
                        I am a Full Stack Software Engineer always looking to expand my skills. I initially began my journey as a Front-End Developer but I have since expanded my skillset to the backend as well. I also have skills in UI/UX design that would benefit any position I fill, being competent with Figma, graphic design with Gimp
                        and video editing with Premiere Pro. I am also a polyglot, having learned multiple languages over the years such as French, Japanese and Latin, so when I'm not coding I'm usually 
                        looking to expand on my linguistic studies as well as being an avid gamer.
                    </p> 
                    <p className="about-heading">Skills</p>
                    <p className="about-text">HTML/CSS | Javascript/Typescript | Bootstrap | React | Redux Toolkit | MongoDB | ExpressJS | NodeJS | Python | C#</p>
                </div>
      
            </div>

        </div>
    )
}