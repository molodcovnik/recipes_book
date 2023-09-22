import React from 'react';
import { Outlet } from 'react-router-dom';
// import Main from "./Main";
import Header from "./Header";
import Sidebar from './Categories';


const RecipesList = () => {
    return (
        <>
        <Header/>
            <main className='main'>
            
                <Sidebar/>
                <Outlet/>
            </main>    
        </>
    );
};

export default RecipesList;