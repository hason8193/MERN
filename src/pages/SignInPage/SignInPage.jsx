import React from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/logo-signin.png";
const SignInPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <InputFormComponent />
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
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <div>
            <Image
              src={imageLogo}
              preview={false}
              alt="img-logo"
              height="203px"
              width="203px"
            />
          </div>
          <h4>Mua sắm tại Tiki</h4>
          <span>Siêu ưu đãi mỗi ngày</span>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
