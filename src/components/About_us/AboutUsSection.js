import React from 'react';
import './About.css'
const AboutUsSection = (props) => {
  return ( 
  <div className="aboutSection flex jc-sb">
  {props.align == "left"? (<>
    <div className="about_img">
          <img src={props.imgUrl} alt="" />
      </div>
      <div className="aboutUs_content sub_headings">
          <h2 className='sub_headings'>
        {props.heading}
          </h2>
          <p>
          {props.desc}
          </p>

          <button className="btn btn_dark btn_large">
              Learn More
          </button>
      </div>
  </>): (<>
      <div className="aboutUs_content sub_headings">
          <h2 className='sub_headings'>
        {props.heading}
          </h2>
          <p>
          {props.desc}
          </p>

          <button className="btn btn_dark btn_large">
              Learn More
          </button>
      </div>
      <div className="about_img">
          <img src={props.imgUrl} alt="" />
      </div></>)}
      
  </div>
  )
};

export default AboutUsSection;
