import React from "react";
import "./style.css"; 

function About() {
  return (
    <main className="about">
        <h1 className="about-title">About Me</h1>
        <hr className="title-line" />
        
        <div className="about-card">
            <div className="avatar">👩‍💻</div>
            <p className="info">
                Hi! My name is Alnura. I am a 4th-year student at KBTU, majoring in
                Information Systems. I am passionate about technology and design,
                currently learning React.js and working on improving my development
                skills 🚀
            </p>

            <div className="contacts">
                <a href="mailto:al_muratova@kbtu.kz">✉️ Email</a>
                <a href="https://github.com/godra-y" target="_blank" rel="noreferrer">
                    💻 GitHub
                </a>
                <a href="https://www.linkedin.com/in/alnura-muratova-63601a375/" target="_blank" rel="noreferrer">
                    🌐 LinkedIn
                </a>
            </div>
        </div>
        </main>
    );
}

export default About;