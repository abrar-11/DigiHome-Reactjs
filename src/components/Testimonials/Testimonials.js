import React from 'react'
import './Testimonials.css'
import Testimonial_box from './Testimonial_box'
const Testimonials = () => {

    const testimonial_data =[
        {
            name: "Cham",
            desc: " our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions",
            imgUrl:"./images/profile-1.png",
            post:"Product designer"
        },
        {
            name: "Scopic Software",
            desc: "We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured",
            imgUrl: "./images/profile-2.png",
            post:"Custom IT Solutions Firm " 
        },
        {
            name: "Russell Lee",
            desc: "It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.",
            imgUrl: "./images/profile-3.png",
            post:"Writer" 
        }  
    ]

    return (
       
        <div className='section_spacing' id=''>
             <h1 className="main_headings text_center text_dark">Testimonials</h1>
           <p className="subPara text_center ">
           Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
           </p>

           <div className="testimonials_wrapper ">
           {testimonial_data.map((tes) => {
                return (
                    <Testimonial_box
                        name={tes.name}
                        desc={tes.desc}
                        imgUrl={tes.imgUrl}
                        post={tes.post}
                    />
                );
            })}
           </div>
        </div>
    )
}

export default Testimonials
