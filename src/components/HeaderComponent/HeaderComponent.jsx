import React from 'react'
import { Col, Row } from 'antd';
import { WrapperHeader,WrapperTextHeader } from './style';
import { Input } from 'antd';
const { Search } = Input;
const HeaderComponent = () => {
  return (
    <div>
    <WrapperHeader>
        <Col span={6}><WrapperTextHeader>HASON</WrapperTextHeader></Col>
        <Col span={12}>
          <Search
          placeholder='input search text'
          allowClear
          enterButton='Search'
          size='large'/>
        </Col>
        <Col span={6}>col-8</Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent