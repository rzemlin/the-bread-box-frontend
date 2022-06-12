import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getRecipes} from '../actions/recipes';
import RecipesContainer from '../containers/RecipesContainer';
import RecipeForm from '../containers/RecipeForm'

class Recipe extends Component {
    componentDidMount(){
        // this is where the recipes are initially loaded
        this.props.getRecipes()
    }

    handleOnClick = (e) => {
        this.props.deleteRecipe(e.target.id)
    }

    render() {
        const recipes = this.props.recipes.map((recipe, id)) => {
            return < RecipesContainer
            key={id}
            name={recipe.attributes.name}
            ingredients={recipe.attributes.ingredients}
            directions={recipe.attributes.directions}
            image={recipe.attributes.image}
            id={recipe.id}
            category_id={recipe.attributes.category_id}
            handleClick={this.handleOnClick}/>
        })

        return (
            <div>
                <h4>Add a new recipe</h4>
                <RecipeForm/>
                {recipes}
            </div>
        )
    }

}


const mapStateToProps = state => {
    // this links to the reducer for state changes
    return {
        recipes: state.recipeReducer.recipes,
        loading: state.recipeReducer.loading
    }
}

export default connect(mapStateToProps, {getRecipes })(Recipe);