import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
const HomePage = () => {
  const arr = ['TV','Laptop','Phone','Tablet','Watch','Headphone','Camera','Printer','Speaker','Monitor']
  return (
    <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>
      {arr.map((item)=>{return <TypeProduct key={item} name={item}/>})}
      </WrapperTypeProduct>
      HomePage
    </div>
    
  )
}

export default HomePage