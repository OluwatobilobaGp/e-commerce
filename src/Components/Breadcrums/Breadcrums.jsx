import React from 'react'
import './Breadcrums.css'
import arrow_icons from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icons} alt="" /> SHOP <img src={arrow_icons} alt="" /> {product.category} <img src={arrow_icons} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums