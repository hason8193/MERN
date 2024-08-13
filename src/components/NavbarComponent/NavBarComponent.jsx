import React from "react";
import { WrapperContent, WrapperLabelText, WrapperTextValue } from "./style";
import { type } from "@testing-library/user-event/dist/type";

const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", [
          "TV",
          "Smartphone",
          "Laptop",
          "Tablet",
          "Accessories",
        ])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
