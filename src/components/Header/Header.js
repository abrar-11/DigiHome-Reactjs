import React, { useState } from "react";
import "./Header.css";
import { MdViewHeadline } from "react-icons/md";
const Header = () => {
    const [humberger, setHumberger] = useState(false);

    let toggleNav =()=>{
        if(humberger){
            setHumberger(false)
        }
    }
    return (
        <div className="header  ">
           

            <div
                className={`"navigation ${
                    humberger ? "navigation_show" : "navigation_hide"
                } flex jc-sb "`}
            >
                <a
                    href="#hero"
                    className="nav_links font_normal"
                    onClick={() => toggleNav()}
                >
                    Home
                </a>
                <a
                    href="#About"
                    className="nav_links font_normal"
                    onClick={() => toggleNav()}
                >
                    About
                </a>
                <a
                    href="#Testinomaials"
                    className="nav_links font_normal"
                    onClick={() => toggleNav()}
                >
                    Testimonials
                </a>
                <a
                    href="#Contact"
                    className="nav_links font_normal"
                    onClick={() => toggleNav()}
                >
                    Contact
                </a>
            </div>

            <p id="logo">Digi Home</p>
            <p
                className="humbergerIcon"
               
            >
                <MdViewHeadline   onClick={() => setHumberger(!humberger)}/>
            </p>

            <div className="cta_button">
                <button className="btn btn_outline">Login</button>
                <button className="btn btn_fill_light ">Sign up</button>
            </div>
        </div>
    );
};

export default Header;
