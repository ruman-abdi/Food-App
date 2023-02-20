
import React from 'react'
import MealItem from '../MealsItem/MealItem';
import Card from '../UI/Card';
import './AvailableMeals.css'
const AvailableMeals = () => {

    const dummyMeals= [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];


const mealsList = dummyMeals.map((dummyMeal)=>(
    <MealItem 
    id= {dummyMeal.id}
    name = {dummyMeal.name}
    description= {dummyMeal.description}
    price= {dummyMeal.price}
    />
))
  return (
    <div className='meals'>
    <Card>
      <ul>
      {mealsList}
      </ul>
      </Card>
    </div>
  )
}

export default AvailableMeals
