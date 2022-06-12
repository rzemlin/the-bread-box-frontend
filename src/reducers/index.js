// this file combines both reducers. This may not be necessary for my project but is good practice for bigger applications
import { combineReducers } from "redux";
import recipeReducer from './recipeReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    recipeReducer,
    categoryReducer
})

export  default rootReducer