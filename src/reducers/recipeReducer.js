//we need to set the default state and action to the recipes initial behavior
const recipeReducer = (state = {recipes: [], loading: false}, action) => {

    switch(action.type){
        
        case "LOADING_RECIPES":
            //this has to match an action in the action folder
            console.log("called loading action")
            return {
                ...state,
                loading: true
        }

        case "RECIPES_LOADED":
            // returns an array of data called payload
            console.log("recipes loaded")
            return {
                ...state,
                recipes: action.payload.data,
                loading: false
        }

        case "ADDING_RECIPE":
            // call add recipe action
            return {
                ...state,
                loading: true
        }

        case "RECIPE_ADDED":
            //returns array of data
            return {
                ...state,
                recipes: [...state.recipes, action.payload.data],
                loading: false
        }

        case "DELETING_RECIPE":
            return {
                ...state,
                loading: true
        }

        case "DELETING_CATEGORY":
            return {
                ...state,
                recipes: [...state.recipes.filter(recipe => `${recipe.id}` !== action.payload)],
                loading: false
            }

        case "RECIPE_EDITED":
            return {
                ...state,
                recipe:[...state.recipe.map(recipe => recipe.id === action.recipe.id ? action.recipe : recipe)]
            }



        default:
            return state
    }
}
export  default recipeReducer
