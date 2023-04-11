import React from "react"; 

export default function ProjectModal(props) {

    const [fadeOut, setFadeOut] = React.useState(false);
    
    function hideModal() {
        setFadeOut(!fadeOut)
    }
    return (
        <div
            className={ "modal fade-in " + (fadeOut ? "fade-out" : " ") }
            onClick={() => {
                hideModal();
                setTimeout(() => {
                    props.handleClick()
                }, 500);
            }}
        >
            <div className="modal-content load-in">
                <h2 className="modal-heading">{props.name}</h2>
            
                <div className="modal-info">
                    <h4 className="modal-subheading">Stack:</h4><p className="modal-text">{props.stack}</p>
                    <h4 className="modal-subheading ">Description:</h4><p className="modal-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
    
}