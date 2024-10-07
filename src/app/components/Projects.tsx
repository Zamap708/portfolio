import React from "react";
import Project from "./Project";
import portfolioData from "../portfolioData";

export default function Projects() {

    const projects = portfolioData.sites

    let content = projects.map( (project, index) => 
        <Project
            key={index}
            name={project.name}
            image={project.image}
            stack={project.stack}
            description={project.description}
            url={project.url}
            git={project.git}
            className="fade-in"
        />
      );

    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center p-0" id="Projects">
            <div className="projects-text">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">My Projects</h1>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-flow-row items-start justify-center gap-10 p-8 transition-all ease-in-out duration-500 delay-400">
                {content}
            </div>
        </div>
    )
}