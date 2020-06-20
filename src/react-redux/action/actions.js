/* eslint-disable prettier/prettier */
import { LOAD_CATEGORIES_BY_ID, LOAD_ALL } from './types';
import categories from '../../Data/categories.json'
import ingredients from '../../Data/ingredients.json'
import recipes from '../../Data/recipes.json'



//Load Recipes
export const loadRecipes = () => {
  const data = {
    recipes,
    ingredients,
    categories
  }
  
  return ( {
    // console.log(data.categories)
    type: LOAD_ALL,
    payload: data
  })
}

