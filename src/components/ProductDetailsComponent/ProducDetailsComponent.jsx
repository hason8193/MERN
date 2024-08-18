import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/tatden1.webp";
import imageProductSmall from "../../assets/images/tatden2.webp";
import {
  WrapperAddressProduct,
  WrapperColImage,
  WrapperImageSmall,
  WrapperInputNumber,
  WrapperNameProduct,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperTextSell,
} from "./style";
import {
  MinusOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  StarFilled,
} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProducDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperColImage span={4}>
            <WrapperImageSmall
              src={imageProductSmall}
              alt="small image product"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperImageSmall
              src={imageProductSmall}
              alt="small image product"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperImageSmall
              src={imageProductSmall}
              alt="small image product"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperImageSmall
              src={imageProductSmall}
              alt="small image product"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperImageSmall
              src={imageProductSmall}
              alt="small image product"
              preview={false}
            />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperImageSmall
              src={imageProductSmall}
              alt="small image product"
              preview={false}
            />
          </WrapperColImage>
        </Row>
      </Col>
      <Col span={14}>
        <WrapperNameProduct>Tắt Đèn (Tái Bản 2022)</WrapperNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperTextSell> | Sold 1000+</WrapperTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>100$</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address"> Hồ Chí Minh</span> -
        </WrapperAddressProduct>
        <WrapperQualityProduct>
          <div>Số lượng</div>
          <div>
            <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
          </div>
        </WrapperQualityProduct>
      </Col>
    </Row>
  );
};

export default ProducDetailsComponent;
