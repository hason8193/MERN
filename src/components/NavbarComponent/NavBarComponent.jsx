import React from "react";
import {
  WrapperContent,
  WrapperLabelText,
  WrapperPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";
const NavBarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value="option.value">{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{`${option} stars`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperPrice>{option}</WrapperPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["TV", "Smartphone", "Laptop"])}
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>

      <WrapperContent>
        {renderContent("price", ["under 40", "over 50"])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
