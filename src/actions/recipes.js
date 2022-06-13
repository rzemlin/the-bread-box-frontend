export const getRecipes = () => {

    return (dispatch) => {
        dispatch({type: "LOADING_RECIPES"})
        fetch("http://localhost:4000/api/v1/recipes")
        .then(res => res.json())
        .then(recipes => dispatch({type: "RECIPES_LOADED", payload: recipes}))

    }
}

export const addRecipe = (recipe) => {

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
        dispatch({type: "DELETING_RECIPE"})
        fetch(`http://localhost:4000/api/v1/recipes/${id}`, {
        method: "DELETE",
        headers: {
            "content-type" : "application/json" 
        }
    })
    .then(res => res.json())
    .then(() => dispatch({type: "RECIPE_DELETED", payload: id}))

    }
}

export const editRecipe = (recipe) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/api/v1/recipes/${recipe.id}`, {
        headers: {
            "content-type" : "application/json" 
            },
        method: "PATCH",
        body: JSON.stringify(recipe),
    })
    .then(res => res.json())
    .then(recipe => dispatch({type: "RECIPE_EDITED", payload: recipe}))

    }
}
    