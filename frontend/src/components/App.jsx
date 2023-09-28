import React from "react";

import { Routes, Route } from 'react-router-dom';

import Main from "./Main";
import Header from "./Header";
import Sidebar from "./Categories";
import RecipesList from "./RecipesList";
import CurrentCategory from "./CurrentCategory";


import "../styles/App.css";
import Recipes from "./Recipes";
import CurrentRecipe from "./CurrentRecipe";
import CreateRecipe from "./CreateRecipe";




function App () {
    let pageNumber = 1;
    return (
        <>
            
            
            
            <Routes>
                <Route path="/" element={<RecipesList/>}>
                    <Route index element={<Recipes pageNumber={pageNumber}/>}/>
                    <Route path="category/:categoryName" element={<CurrentCategory/>}/>
                    <Route path="recipe/:id" element={<CurrentRecipe/>}/>
                    <Route path="create" element={<CreateRecipe/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;