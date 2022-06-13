import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './containers/NavBar'
import InitialLoad from './containers/InitialLoad'
import Home from './containers/Home'
import RecipesContainer from './containers/RecipesContainer'
import CategoriesContainer from './containers/CategoriesContainer'

function App() {
  return (
    <Router>
     <NavBar />
     <div>
       <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/recipeForm' element={<RecipeForm/>}/>
       <Route exact path='/recipes' element={<RecipesContainer/>}/>
       <Route exact path='/categories' element={<CategoriesContainer/>}/>
       <Route exact path='/recipes/:id/edit' element={<RecipeEdit/>}/>
       
        </Routes>
      </div>
     </Router>
   
  );
}

export default App;
