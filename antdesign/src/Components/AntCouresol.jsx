import React from "react";
import { Carousel } from "antd";

const AntCouresol = () => {
    
  return (
    <Carousel autoplay pauseOnHover={false}>
 
     <div className="w-[50%] px-11 border " >
        <img
          src="https://plus.unsplash.com/premium_photo-1691917243192-cf1638ffdb42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-500px  h-[500px] object-cover "
        />
      </div>
      <div  >
      <img
          src="https://plus.unsplash.com/premium_photo-1691917243192-cf1638ffdb42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-500px  h-[500px] object-cover "
        />
      </div>
      <div  >
      <img
          src="https://plus.unsplash.com/premium_photo-1691917243192-cf1638ffdb42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-500px  h-[500px] object-cover "
        />
      </div>
   
    </Carousel>
  );
};

export default AntCouresol;
