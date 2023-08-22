import React from "react";
import { Button  , FloatButton } from "antd";
import {GrSubtractCircle} from 'react-icons/gr'


const UseButton = () => {
  return (
    <div className="flex gap-4">
      <Button>first button</Button>

      <Button type="dashed">first button</Button>
      <Button type="text">first button</Button>
      <Button type="default" loading  htmlType="button"  icon={<GrSubtractCircle/>}    >
        button
      </Button>



      <FloatButton.Group shape="circle" style={{right:20}} >
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


    </div>
  );
};

export default UseButton;
