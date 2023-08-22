import React from "react";
import { Button } from "antd";
import {GrSubtractCircle} from 'react-icons/gr'


const UseButton = () => {
  return (
    <div className="flex gap-4">
      <Button>first button</Button>

      <Button type="dashed">first button</Button>
      <Button type="text">first button</Button>
      <Button type="default" loading  htmlType="button" placeholder="" icon={<GrSubtractCircle/>}    >
        button
      </Button>

    </div>
  );
};

export default UseButton;
