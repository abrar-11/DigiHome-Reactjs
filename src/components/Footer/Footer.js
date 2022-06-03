import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer section_spacing ' id='Contact'>
           
           <div className="single_section">
        
               <h2 className='footer_heading'>
                    DigiHome
               </h2>
               <p className="footer_desc">
               Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.
               </p>

               <div className="email_wrapper">
                   <input type="email" placeholder='Email Address' />
                   <button className="btn_register">
                       Register
                   </button>
               </div>
           </div>

           {/* ===================== */}
           <div className="single_section">
               <h2 className='footer_heading'>
                   Categories
               </h2>
               
               <div className="footer_list">
                   <p>Product Management</p>
                   <p>Design / Creatives</p>
                   <p>Education & Training</p>
                   <p>Education & Training</p>
                   <p>Development</p>
                   <p>Customer</p>
               </div>
               
           </div>

           {/* ===================== */}
           <div className="single_section">
               <h2 className='footer_heading'>
                   About
               </h2>
               
               <div className="footer_list">
                   <p>About Us</p>
                   <p>Partnerships</p>
                   <p>Finance Experts </p>
                   <p>Management</p>
                   <p>Product Manager</p>
                   <p>The Team</p>
               </div>
               
           </div>

           {/* ===================== */}
           <div className="single_section">
               <h2 className='footer_heading'>
                  Follow Us
               </h2>
               
               <div className="footer_list">
                   <p>Facebook</p>
                   <p>Twitter</p>
                   <p>Instagram </p>
                   <p>Linkedin</p>
                
               </div>
               
           </div>

           {/* ===================== */}

        </footer>
    )
}

export default Footer
