import React from 'react'
import './Clients.css'
const Clients = () => {
    return (
        <div className='section_spacing'>
           <h1 className="main_headings text_center text_dark">Our Clients</h1>
           <p className="text_center subPara">
           Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
           </p>

           <div className="clients_wrapper flex ">
               <div className="client_box">
                   <img src="./images/client-1.png" alt="" />
               </div>
               <div className="client_box">
                   <img src="./images/client-2.png" alt="" />
               </div>
               <div className="client_box">
                   <img src="./images/client-3.png" alt="" />
               </div>
               <div className="client_box">
                   <img src="./images/client-4.png" alt="" />
               </div>
               <div className="client_box">
                   <img src="./images/client-5.png" alt="" />
               </div>
               <div className="client_box">
                   <img src="./images/client-6.png" alt="" />
               </div>
               
           </div>
        </div>
    )
}

export default Clients
