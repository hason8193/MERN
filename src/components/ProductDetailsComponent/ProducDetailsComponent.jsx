import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/tatden1.webp";
import imageProductSmall from "../../assets/images/tatden2.webp";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
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
  FolderOpenTwoTone,
  MinusOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  StarFilled,
} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProducDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "8px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
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
      <Col span={14} style={{ paddingLeft: "10px" }}>
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
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleButton={{
              borderRadius: "0",
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
            }}
            textButton={"Chọn mua"}
          />
          <ButtonComponent
            size={40}
            styleButton={{
              borderRadius: "0",
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(12,92,182)",
              borderRadius: "4px",
            }}
            styleTextButton={{ color: "rgb(12,92,182)", fontSize: "15px" }}
            textButton={"Mua trả sau"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProducDetailsComponent;
