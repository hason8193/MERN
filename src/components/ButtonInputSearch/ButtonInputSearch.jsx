import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButonComponent";
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(12,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderRadius: "0" }}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          borderRadius: "0",
          background: backgroundColorButton,
          border: !bordered && "none",
        }}
        icon={
          <SearchOutlined style={{ color: colorButton }} color={colorButton} />
        }
        styleTextButton={{ color: colorButton }}
        textButton={textButton}
      />
    </div>
  );
};

export default ButtonInputSearch;
