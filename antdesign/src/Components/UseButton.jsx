import React from "react";
import { Button } from "antd";

const UseButton = () => {
  return (
    <div className="flex gap-4">
      <Button>first button</Button>

      <Button type="dashed">first button</Button>
      <Button type="text">first button</Button>
      <Button type="default" 
      htmlType="submit" placeholder="submit" icon
      >
        submit
      </Button>
    </div>
  );
};

export default UseButton;
