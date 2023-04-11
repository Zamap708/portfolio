import React from "react";
import './projects.css'

export default function Project(props) {
    return (
        <div className="project-content">
           
            <div className="project-content-wrapper">
                            
                <div className="screenshot-assessment">
                    <div className="website-link-wrapper">
                        <a href={ props.url } className="website-link" target="_blank" rel="noreferrer">Visit Website</a>
                    </div>
                </div>

                <div className="project-text">
                    <div className="website-name">
                        <h4 className="m-1">{ props.name }</h4>
                    </div>
                    <div className="project-text-inner scroll">
                        <div className="stack">
                            <p className="sub-heading m-1">Stack</p>
                            <p className="m-0">{ props.stack }</p>
                        </div>

                        <div className="website-description">
                            <p className="sub-heading m-1">Description</p>
                            <p className="m-0">{ props.description }</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}