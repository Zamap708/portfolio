import React from "react";
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="hero-content">

                <div className="hero-column">
                    <div className="hero-text">
                        <h1 className="hero-name">Zama<br/>Phungula</h1>
                        <div className="hero-subtitle">Full Stack Developer<br/>UI/UX Designer</div>
                    </div>
                    <div className="social-media-links">
                        <a href="https://github.com/Zamap708" target="_blank"><div className="github icon"></div></a>
                        <a href="https://www.linkedin.com/in/zama-phungula-562a991a3/"><div className="linkedin icon"></div></a>
                        <a href="mailto: zamafphungula@gmail.com"><div className="email icon"></div></a>
                    </div>
                </div>

                <div className="hero-column">
                    <ul className="site-map">
                        <li className="site-link"><a href="#about" className="site-link-anchor">Bio</a></li>
                        <li className="site-link"><a href="#projects" className="site-link-anchor">Projects</a></li>
                        <li className="site-link"><a href="#contact" className="site-link-anchor">Contact Me</a></li>
                        <li className="site-link"><a href="https://drive.google.com/file/d/1HE6uY6zOuPaU2PD4q2T8PE_5nCtW2Sl9/view?usp=share_link" target="_blank" className="site-link-anchor">Curriculum Vitae</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}