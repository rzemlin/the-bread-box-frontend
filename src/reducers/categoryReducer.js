const categoryReducer = (state = {categories: [], loading: false}, action) => {

    switch(action.type){
        
        case "LOADING_CATEGORIES":
            //this has to match an action in the action folder
            console.log("called corresponding action")
            return {
                ...state,
                loading: true
        }

        case "CATEGORIES_LOADED":
            // returns an array of data called payload
            return {
                ...state,
                categories: action.payload.data,
                loading: false
        }

        case "ADDING_CATEGORY":
            // call add recipe action
            return {
                ...state,
                loading: true
        }

        case "CATEGORY_ADDED":
            //returns array of data
            return {
                ...state,
                recipes: [...state.categories, action.payload.data],
                loading: false
        }

        case "DELETING_RECIPE":
            return {
                ...state,
                loading: true
        }

        case "CATEGORY_DELETED":
            return {
                ...state,
                categories: [...state.categories.filter(category => `${category.id}` !== action.payload)],
                loading: false
            }



        default:
            return state
    }
}
export  default categoryReducer