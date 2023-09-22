import React from "react";

import { Routes, Route } from 'react-router-dom';

import Main from "./Main";
import Header from "./Header";
import Sidebar from "./Categories";
import RecipesList from "./RecipesList";
import CurrentCategory from "./CurrentCategory";


import "../styles/App.css";
import Recipes from "./Recipes";




function App () {
    let pageNumber = 1;
    return (
        <>
            
            
            
            <Routes>
                <Route path="/" element={<RecipesList/>}>
                    <Route index element={<Recipes pageNumber={pageNumber}/>}/>
                    <Route path="category" element={<CurrentCategory/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;