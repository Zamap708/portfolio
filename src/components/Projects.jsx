import React from "react";
import portfolioData from "../portfolioData";
import Project from "./Project";
import "./projects.css";

export default function Projects() {

    const projects = portfolioData.sites

    let content = projects.map(project => 
        <Project
            name={project.name}
            image={project.image}
            stack={project.stack}
            description={project.description}
            url={project.url}
            className="fade-in"
        />
      );

    return (
        <div className="projects" id="projects">
            <div className="projects-text">
                <h1>View My Projects</h1>
            </div>
            <div className="projects-wrapper">
                {content}
            </div>
        </div>
    )
}