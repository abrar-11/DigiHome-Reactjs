import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
    return (
        <div className="text_center text_light hero section_spacing" id="hero">
            <h1 className="main_headings ">Smart Home <br /> Application</h1>

            <p className="font_normal ">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>

            <div className="heroImg fade-in-top ">
                <img src="./images/Hero Image.png" alt="" className="hero_img" />
            </div>

            <svg className="curveSvg"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,48C384,21,480,11,576,10.7C672,11,768,21,864,58.7C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    );
};

export default HeroSection;
