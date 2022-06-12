export const getRecipes = () => {

    return (dispatch) => {
        dispatch({type: "LOADING_RECIPES"})
        fetch("http://localhost:4000/api/v1/recipes")
        .then(res => res.json())
        .then(recipes => dispatch({type: "RECIPES_LOADED", payload: recipes}))

    }
}

export const addRecipe = () => {

    return(dispatch) => {
        dispatch({type: "ADDING_RECIPE"})
        fetch("http://localhost:4000/api/v1/recipes", {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            "content-type" : "application/json" 
        }
    })
    .then(res => res.json())
    .then(recipe => dispatch({type: "RECIPE_ADDED", payload: recipe}))

    }
}

export const deleteRecipe = (id) => {

    return(dispatch) => {
        dispatch({type: "DELETE_RECIPE"})
        fetch(`http://localhost:4000/api/v1/recipes/${id}`, {
        method: "DELETE",
        body: JSON.stringify(recipe),
        headers: {
            "content-type" : "application/json" 
        }
    })
    .then(res => res.json())
    .then(() => dispatch({type: "RECIPE_DELETED", payload: id}))

    }
}