import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/logo-signin.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleNavigateSignup = () => {
    navigate("/sign-up");
  };
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
          <p>Đăng nhập và tạo tài khoản</p>
          <InputFormComponent
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>
          <InputFormComponent
            placeholder="password"
            type={isShowPassword ? "text" : "password"}
          />
          <ButtonComponent
            size={40}
            styleButton={{
              borderRadius: "0",
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
            }}
            textButton={"Chọn mua"}
          />
          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản?{" "}
            <WrapperTextLight onClick={handleNavigateSignup}>
              Tạo tài khoản
            </WrapperTextLight>
          </p>
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
