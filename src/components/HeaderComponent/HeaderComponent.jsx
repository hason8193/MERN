import React from 'react'
import { Col } from 'antd';
import { WrapperHeader,WrapperTextHeader } from './style';
import Search from 'antd/lib/input/Search';

const HeaderComponent = () => {
  return (
    <div>
    <WrapperHeader>
        <Col span={6}><WrapperTextHeader>HASON</WrapperTextHeader></Col>
        <Col span={12}>
          <Search
          placeholder='input search text'
          enterButton
          allowClear
          />
        </Col>
        <Col span={6}>col-8</Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent