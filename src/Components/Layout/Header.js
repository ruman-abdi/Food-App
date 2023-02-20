import React, { Fragment } from 'react'
import CartButtton from './CartButtton'
import './Header.css'
const Header = () => {
  return (
<Fragment>
<header className='header'>
    <h1>React meal</h1>
    <CartButtton/>
 </header>
 <div className='image'></div>
     </Fragment>
    
  )
}

export default Header
