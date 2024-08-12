import React from 'react'
import { Card } from 'antd';
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
  return (
    <Card
    hoverable
    style={{ width: 240,bodyStyle:{padding:'10px'}}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Iphone</StyleNameProduct>
    <WrapperReportText>
      <span>
        <span>4.96</span>
        <StarFilled style={{fontSize:'12px',color:'yellow'}}/>
      </span>
      <span>| Sold 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        $1000
        <WrapperDiscountText>-5%</WrapperDiscountText></WrapperPriceText>
  </Card>
  )
}

export default CardComponent