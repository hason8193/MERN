import React from "react";
import { Button } from "antd";
const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  ...rests
}) => {
  return (
    <div>
      <Button
        size={size}
        //</div>icon={<SearchOutlined style={{color:colorButton}}/>}
        style={styleButton}
        {...rests}
      >
        <span style={styleTextButton}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonComponent;
