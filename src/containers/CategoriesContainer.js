import React from 'react';

const RecipesContainer = (props) => {
    return (
        
        <div>
        
            <h3>{props.name}</h3>
            <h4>Directions: {props.directions}</h4>
            <h5>Ingredients: {props.ingredients}</h5>
           </div>
           )
    }
    

    export default RecipesContainer 
