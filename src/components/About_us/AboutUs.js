import React from "react";
import "./About.css";
import AboutUsSection from "./AboutUsSection";

const AboutUs = () => {
    const sections = [
        {
            heading: `
    Smart Home’s Smart Services`,
            desc: "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
            imgUrl:"./images/card-1.png",
            style: "btn_dark",
            align: "right",
        },

        {
            heading: `What app can do to your Appliences?`,
            desc: "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
            style: "btn_outline",
            imgUrl:"./images/card-2.png",
            align: "left",
        },
        {
            heading: `Control Electric Appliences`,
            desc: "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
            imgUrl:"./images/card-3.png",
            style: "btn_outline",
            align: "right",
        },
    ];
    return (
        <>
        <div className='section_spacing About' id="About">
  <h1 className="main_headings text_center text_dark">About us</h1>

            {sections.map((sec) => {
                return (
                    <AboutUsSection
                        align={sec.align}
                        heading={sec.heading}
                        desc={sec.desc}
                        style={sec.style}
                        imgUrl={sec.imgUrl}
                    />
                );
            })}
        </div>
        </>

    );
};

export default AboutUs;
