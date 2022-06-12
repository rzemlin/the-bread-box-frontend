import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home'
import RecipesContainer from './containers/CategoriesContainer'
import CategoriesContainer from './containers/RecipesContainer'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/recipes' element={<RecipesContainer />} />
        <Route exact path='/categories' element={<CategoriesContainer />} />
       
      </Routes>
    </div>
    </Router>
  );
}

export default App;
