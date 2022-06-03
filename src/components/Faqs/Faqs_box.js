
import React, { useEffect, useState } from "react";

const Faqs_box = (props) => {
    const [isDisplay, setisDisplay] = useState(false);
    
    // useEffect(() => {
    //   if  (isDisplay ){
    //         document.getElementsByClassName("faq_answer show").className.remove("show")
    //     }
    
      
    // }, [isDisplay]);

    const handleDisplay=()=>{
        if(!isDisplay){
            console.log("Inside hanllde");
            
            const showQuestion = document.querySelector('.faq_answer.show');
            showQuestion?.classList.remove("show")
            showQuestion?.classList.add("hide")
            console.log(showQuestion);
            setisDisplay(true);
        }
        else{
            setisDisplay(false)
        }
    }
    
    return (
        <div className="faq_wrapper " >
            <div className="faq_ques flex ">
                <button >
                    {/* {isDisplay? (<HorizontalRuleIcon className="hideFaqIcon"/>):(<AddIcon className="showFaqIcon"/>)}
                     */}
                </button>
                <div className="ques_answer " onClick={() => handleDisplay()}>
                <p className="question">{props.ques}</p>
                <p className={`faq_answer fade-in-top ${isDisplay ? "show" : "hide"}`}>
                    {props.answer}
                </p>
                </div>
               
            </div>
        </div>
    );
};

export default Faqs_box;
