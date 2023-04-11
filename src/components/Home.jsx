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
                        <div className="github icon"><a href=""></a></div>
                        <div className="linkedin icon"><a href=""></a></div>
                        <div className="email icon"><a href=""></a></div>
                    </div>
                </div>

                <div className="hero-column">
                    <ul className="site-map">
                        <li className="site-link"><a href="" className="site-link-anchor">Bio</a></li>
                        <li className="site-link"><a href="" className="site-link-anchor">Projects</a></li>
                        <li className="site-link"><a href="" className="site-link-anchor">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}