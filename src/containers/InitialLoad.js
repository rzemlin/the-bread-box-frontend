import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipes'
import {getCategories} from '../actions/category'
import RecipesContainer from './CategoriesContainer'

function initialLoad(props) {
    let [recipes, setrecipes] = useState([])

    const {id} = useParams()

    const recipes = props.recipes.filter(recipe => recipe.id === id)[0]
    console.log(props.recipes.filter(recipe => recipe.id === id))

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/recipes")
        .then(res => res.json())
        .then(data => {
            console.log(data.data)})
        },[])

        const recipe = recipes.filter(recipe => recipe.attributes.category_id == id)

        const recipes = recipes.map((recipe, i) => {return < RecipesContainer
        key={i}
        name={recipe.attributes.name}
        ingredients={recipe.attributes.ingredients}
        description={recipe.attributes.description}
        image={recipe.attributes.image}
        category_id={recipe.attributes.category_id}
        name={recipe.attributes.category.name}/>
        })

        return (
            <div>
            <p>Name: {recipe.attributes.name}</p>
            <p>Description: {recipe.attributes.description}</p>
            <p>Ingredients: {recipe.attributes.ingredients}</p>
            <h4>Category</h4>
            {recipe}
            </div>    
        );    
        
    }

    const mapStateToProps = state => {
        console.log("mapStateToProps in initialLoad")
        return {
            recipes: state.recipeReducer.recipes,
            categories: state.categoryReducer.categories
        }
    }
        
export  default connect(mapStateToProps, {getRecipes, getCategories})(initialLoad);