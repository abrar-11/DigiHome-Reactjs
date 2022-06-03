import React, { useState } from "react";
import "./Faqs.css";
import Faqs_box from "./Faqs_box";
const Faqs = () => {
    let faqs = [
        {
            ques: "Stuff sight equal of my woody? ",
            answer: "Dolor sit amet consectetur adipisicing elit. Nihil, id sapiente! Repudiandae enim non sint temporibus facere expedita, distinctio officiis, ipsum vel deleniti quod aspernatur qui recusandae porro repellat.",
        },
        {
            ques: "At by pleasure of children be?",
            answer: "Nihil, id sapiente! Repudiandae enim non sint temporibus facere expedita, distinctio officiis, ipsum vel deleniti quod aspernatur qui recusandae porro repellat. ",
        },
        {
            ques: "Amounted repeated as believed in confined? ",
            answer: "Adipisicing elit. Nihil, id sapiente! Repudiandae enim non sint temporibus facere expedita, distinctio officiis, ipsum vel deleniti quod aspernatur qui recusandae porro repellat. ",
        },
        {
            ques: "In am do giving to afford parish settle easily garret?",
            answer: "Id sapiente! Repudiandae enim non sint temporibus facere expedita, distinctio officiis, ipsum vel deleniti quod aspernatur qui recusandae porro repellat. ",
        },
    ];
    return (
        <div className="section_spacing">
            <h1 className="main_headings text_center text_dark faqs">FAQ's</h1>

            {faqs.map((faq,index) => {
                
                return <Faqs_box ques={faq.ques} answer={faq.answer} key={index} />;
            })}
        </div>
    );
};

export default Faqs;
