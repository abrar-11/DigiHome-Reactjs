import React from 'react';

const Testimonial_box = (props) => {
  return   <div className="testimonial_box">
  <p className="testimonials_desc">
 {props.desc}
  </p>

  <div className="testimonials_profile flex">
      <div className="profile_img">
          <img src={props.imgUrl} alt="" />
      </div>
      <div className="profile_details">
          <p className='profile_name'>{props.name}</p>
          <p className='profile_post'>{props.post}</p>
      </div>
  </div>
</div>;
};

export default Testimonial_box;
