import React from 'react';

import Sidebar from "./Categories";
import Recipes from "./Recipes";
import Header from './Header';

import '../styles/Main.css'


const Main = (props) => {
    return (
        // 
        <>
        <Header/>
            <main className='main'>
            
                <Sidebar/>
                <Recipes pageNumber={props.pageNumber}/>
            </main>    
        </>

        // 
    );
};

export default Main;