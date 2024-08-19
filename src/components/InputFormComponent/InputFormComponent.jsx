import { Input } from "antd";
import React, { useState } from "react";

const InputFormComponent = ({ props }) => {
  const [valueInput, setValueInput] = useState("");
  //   const { placeholder = "Nhập text" } = props;
  return <Input placeholder={"Nhập text"} valueInput={valueInput} />;
};

export default InputFormComponent;
