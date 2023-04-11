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
                        
                        <a href={props.git} className="website-link" target="_blank" rel="noreferrer">
                            <button className="link-button">View Code</button>
                        </a>
                        
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}