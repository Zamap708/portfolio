import React from "react";
import './projects.css';
import ProjectModal from "./ProjectModal";

export default function Project(props) {
    const [showModal, setShowModal] = React.useState(false);
    function handleClick() {
        console.log(showModal)
        setShowModal(!showModal)
        console.log(showModal)
    }

    return (
        <>
         {showModal ? <ProjectModal handleClick={handleClick} name={props.name} stack={props.stack} description={props.description} /> : ""}
        
        <div className="project-content">
           
            <div className="project-content-wrapper">
                            
                <div className="screenshot-wrapper">
                    <img src={ props.image } alt="" className="screenshot" onClick={handleClick}/>
                    <div className="website-link-wrapper">
                        
                        <a href={props.url} className="website-link" target="_blank" rel="noreferrer">
                            <button className="link-button">Visit Website</button>
                        </a>
                        
                        <a href={props.url} className="website-link" target="_blank" rel="noreferrer">
                            <button className="link-button">View Code</button>
                        </a>
                        
                    </div>
                </div>

                {/* <div className="project-text">
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
                </div> */}

            </div>

        </div>
        </>
    )
}