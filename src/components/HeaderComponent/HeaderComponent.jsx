import React from 'react'
import { Col } from 'antd';
import { WrapperHeader,WrapperTextHeader,WrapperHeaderAccount,WrapperTextHeaderSmall } from './style';
import  ButtonInputSearch  from '../ButtonInputSearch/ButtonInputSearch';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
    <WrapperHeader gutter={16}>
        <Col span={6}><WrapperTextHeader>HASON</WrapperTextHeader></Col>
        <Col span={12}>
          <ButtonInputSearch
          bordered={false}
          size='large'
          textButton='Search'
          placeholder='input search text'
          />
        </Col>
        <Col span={6} style={{display:'flex',gap:'20px'}}>
          <WrapperHeaderAccount>
          <UserOutlined style={{fontSize:'30px'}} />
          <div>
            <WrapperTextHeaderSmall>Sign in/Sign up</WrapperTextHeaderSmall>
            <div>
              <WrapperTextHeaderSmall>User</WrapperTextHeaderSmall>
              <CaretDownOutlined />
            </div>
          </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}} />
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
          
          </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent