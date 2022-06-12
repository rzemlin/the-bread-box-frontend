import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addRecipe} from '../actions/recipes'
import {getCategories} from '../actions/category'

class RecipeForm extends Component {
    state = {
        name: "",
        ingredients: "",
        description: "",
        image: "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg",
        category_id: "",
        loading: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRecipe(this.state)
        this.setState({
            name: "",
            ingredients: "",
            description: "",
            image: "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg",
            category_id: "",
            loading: false
        })
    }

    componentDidMount(){
        return(
            <div>
                <form>
                    <label>Name: </label>
                    <input type="text" placeholder="Recipe Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <label>Ingredients: </label>
                    <input type="text" placeholder="Ingredients" value={this.state.ingredients} name="ingredients" onChange={this.handleChange}/>
                    <label>Description: </label>
                    <input type="text" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange}/>
                    <label>Image: </label>
                    <input type="text" placeholder="image url" value={this.state.image} name="image" onChange={this.handleChange}/>
                    <label> Category 
                    <select value={this.state.category_id} onChange={this.handleChange}>
                    {this.props.categories.map((category, id) => (
                        <option key={id} value={category.id}> {category.attributes.name}</option>
                    ))}
                    </select>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}