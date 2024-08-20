import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
border-top:none;
border-left:none;
border-right:none;
background-color:rgb(232,240,254);
outline:none;

&:focus {
    background-color: rgb(232, 240, 254); /* Same background color on focus */

  }
`