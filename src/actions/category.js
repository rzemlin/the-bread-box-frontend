export const getCategories = () => {

    return (dispatch) => {
        dispatch({type: "LOADING_CATEGORIES"})
        fetch("http://localhost:4000/api/v1/categories")
        .then(res => res.json())
        .then(categories => dispatch({type: "CATEGORIES_LOADED", payload: categories}))

    }
}

export const addCategory = () => {

    return(dispatch) => {
        dispatch({type: "ADDING_CATEGORY"})
        fetch("http://localhost:4000/api/v1/categories", {
        method: "POST",
        body: JSON.stringify(category),
        headers: {
            "content-type" : "application/json" 
        }
    })
    .then(res => res.json())
    .then(category => dispatch({type: "CATEGORY_ADDED", payload: category}))

    }
}

export const deleteCategory = (id) => {

    return(dispatch) => {
        dispatch({type: "DELETE_CATEGORY"})
        fetch(`http://localhost:4000/api/v1/categories/${id}`, {
        method: "DELETE",
        body: JSON.stringify(category),
        headers: {
            "content-type" : "application/json" 
        }
    })
    .then(res => res.json())
    .then(() => dispatch({type: "RECIPE_DELETED", payload: id}))

    }
}