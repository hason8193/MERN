import React from "react";
import logo from "../../assets/images/logo.png";
import {
  StyleNameProduct,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperCardStyle,
} from "./style";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200, bodyStyle: { padding: "10px" } }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "80px",
          height: "25px",
          position: "absolute",
          top: -1,
          left: -1,
        }}
      />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span>| Sold 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        $1000
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
