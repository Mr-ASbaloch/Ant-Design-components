import React from "react";
import { Button  , FloatButton } from "antd";
import {GrSubtractCircle ,GrLinkTop} from 'react-icons/gr'


const UseButton = () => {
  return (
    <div className="flex gap-4">
      <Button>first button</Button>

      <Button type="dashed">first button</Button>
      <Button type="text">first button</Button>
      <Button type="default" loading  htmlType="button"  icon={<GrSubtractCircle />}    >
        button
      </Button>



      <FloatButton.Group shape="circle" className='fixed top-[50%] left-[50%]' >
      <FloatButton  shape="square" tooltip={<div>document</div>} >
        submit
      </FloatButton>
      <FloatButton  shape="square" tooltip={<div>document</div>} >
        submit
      </FloatButton>
      <FloatButton  shape="square" tooltip={<div>document</div>} >
        submit
      </FloatButton>
      </FloatButton.Group>
      <div className="h-[500vh] p-5">

        <FloatButton.BackTop tooltip='move up' icon={<GrLinkTop className='text-white' />} className='bg-black text-[green]' />

       
      </div>
     
  </div>




  );
};

export default UseButton;
