/* eslint-disable prettier/prettier */
import {GET_DATA, LOAD_RECIPES, LOAD_ALL} from '../action/types'

const initialState = {
    recipes: null
}



export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_DATA:
        case LOAD_ALL:
            return {
                ...state,
               recipes: action.payload
            };
        default:
            return state
    }
}