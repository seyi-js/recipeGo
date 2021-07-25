/* eslint-disable prettier/prettier */
import { LOAD_CATEGORIES_BY_ID, LOAD_ALL } from './types';
import rest_config from '../../../rest_config'



//Load Recipes
export const loadData =  () =>dispatch=> {
  const number = 20
  const tags = 'vegetarian'
  const config = {
    headers: {
      "x-rapidapi-host": rest_config.API_HOST,
      "x-rapidapi-key": rest_config.API_KEY
    }
  }
  fetch( `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=${number}`, config )
    .then( ( res ) => res.json() )
    .then( res =>dispatch( {
      
      // console.log(data.categories)
      type: LOAD_ALL,
      payload: res.recipes
    }) )
    .catch( err =>{
     
      console.log( err )
    })


  
}

