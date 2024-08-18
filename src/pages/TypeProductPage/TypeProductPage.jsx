import React, { Fragment } from "react";
import NavBarComponent from "../../components/NavbarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavBar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavBar span={4}>
          <NavBarComponent />
        </WrapperNavBar>
        <Col span={20}>
          <WrapperProducts span={20}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            defaultCurrent={2}
            total={100}
            onChange={onChange}
            style={{
              marginTop: "10px",
              justifyContent: "center",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
