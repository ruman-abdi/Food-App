import React from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
    const price = `$${props.price}`
  return (
    <div className='mealsitem'>
      <h3>{props.name}</h3>
      <div className='desc'>{props.description}</div>
      <div className='price'>{price}</div>
      <div>
      <MealItemForm/>
      </div>
      
    </div>
  )
}

export default MealItem
