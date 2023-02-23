import React from 'react'
import Modal from '../UI/Modal'
import './ShopingCart.css'
const ShopinCart = (props) => {
    const cartitems =<ul className='cart-items'>{
        [{
            id:'c1',
            name: 'pilau',
            amount:2,
            price:70
        }].map((item)=>(
            <li>{item.name}</li>))

    }</ul>
  return (

    <div>
      {cartitems}
      <div>
      <span className='total'>Total amount</span>
      <span>34.5</span>
      </div>
      <div className='actions'>
      <button className='btn--alt'>close</button>
      <button className='button'>order</button>
      </div>
    
      </div>
    
  )
}

export default ShopinCart
