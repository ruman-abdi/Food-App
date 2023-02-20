import React from 'react'
import CartIcon from '../Cart/Cart'
import './CartButton.css'
const CartButtton = () => {
  return (
<div>
<button className='button'>
    <span className='icon'>
    <CartIcon/>
    </span>
    <span>your cart</span>
    <span className='badge'>3</span>

</button>
      
    </div>
  )
}

export default CartButtton
