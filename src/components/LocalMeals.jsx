
import localmeals from '../loo'
import Local from './Local'
 import React from 'react'
 
 const LocalMeals = () => {
     return (
         <div>
             <div className='meal-list'>
                {localmeals.yoruba.map((meal) =>
                    <Local key= {meal.id}
                        foodName={ meal.names}
                        foodImage= {meal.images}
                        foodDesc= {meal.description}
                        foodPrep= {meal.preparationMode}
                    />
                )}
            </div>
         </div>
     )
 }
 
 export default LocalMeals
 