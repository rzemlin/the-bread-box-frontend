import React {Component} from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipes'
import {editRecipe} from '../actions/recipes'

class RecipeEdit extends Component {
    componentDidMount(){
        //should load data
        this.props.getRecipes()
    }

    state = {
        name: "",
        ingredients: "",
        directions: "",
        image: "",
        loading: false
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let recipe = {...this.state, id: this.props.recipe.id}
        this.props.editRecipe(recipe)
        this.setState({
            name: "",
            ingredients: "",
            directions: "",
            image: "",
            loading: false
        })
    }

    render() {
        return (
            <div>
                <h2>Edit or change information</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" placeholder="Recipe Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <label>Ingredients:</label>
                    <input type="text" placeholder="Ingredients" value={this.state.ingredients} name="ingredients" onChange={this.handleChange}/>
                    <label>Description:</label>
                    <input type="text" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange}/>
                    <label>Image Url</label>
                    <input type="text" placeholder="www.example.com" value={this.state.image} name="image" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipeReducer.recipe,
    }
}

export default connect(mapStateToProps, {getRecipes, editRecipe})(RecipeEdit);


