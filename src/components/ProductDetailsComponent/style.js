import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperImageSmall = styled(Image)`
    height:64px;
    width:64px;
`

export const WrapperColImage = styled(Col)`
    flex-basis:unset;
    display:flex;`

export const WrapperNameProduct = styled.h1`
    margin: 0 0 4px;
    color:rgb(36,36,36);
    font-size:24px;
    font-weight:300;
    line-height:32px;
    word-break:break-word;`

export const WrapperTextSell = styled.span`
    font-size:15px;
    line-height:24px;
    color:rgb(120,120,120);`

export const WrapperPriceProduct = styled.div`
    background:rgb(250,250,250);
    border-radius:4px;`

export const WrapperPriceTextProduct = styled.h1`
    font-size:32px;
    line-height:40px;
    margin-right:8px;
    font-weight:500;
    margin-top:10px`

export const WrapperAddressProduct = styled.div`
    span.address{
        text-decoration:underline;
        font-size:15px;
        line-height:24px;
        font-weight:500;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;}
    span.change-address{
        color:rgb(11,116,229);
        font-size:16px;
        line-height:24px;
        font-weight:500;}`

export const WrapperQualityProduct = styled.h1`
`

export const WrapperBtnQualityProduct = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
    span{
        font-size:16px;
        line-height:24px;
        font-weight:500;
        margin-right:10px;}`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number ant-input-number-sm{
        width:40px};`