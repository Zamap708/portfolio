import React from "react";
import "./contact.css";

export default function Contact() {

    const [formData, setFormData] = React.useState({
        name: "",
        email:  "",
        message: ""
    })

    const [isSubmitted, setIsSubmitted] = React.useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        setIsSubmitted(isSubmitted => !isSubmitted);

        emailjs.sendForm('service_fiys2dr', 'template_iz54nkt', event.target, 'kDJTFrwZ2QKQ2yuPZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className="contact">
            <div className="contact-animation"></div>

            
            {isSubmitted ?
                <div className="thank-you">
                    <p className="thank-heading">MESSAGE RECEIVED!</p>
                </div> :
                    <form onSubmit={handleSubmit} className="contact-wrapper">
                        <p className="contact-heading">Contact Page</p>
                        
                        <div className="form-wrapper">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <textarea 
                                name="message"
                                placeholder="Your Message"
                                rows={40}
                                value={formData.query}
                                onChange={handleChange}
                            />
                        </div>

                        
                        <button className="btn">Submit</button>

                    </form>
                }
        </div>     
    )
}
