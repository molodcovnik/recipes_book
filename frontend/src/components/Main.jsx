import React from 'react';

import Sidebar from "./Categories";
import Recipes from "./Recipes";

import '../styles/Main.css'

const Main = (props) => {
    return (
        <main className='main'>
            <Sidebar/>
            <Recipes pageNumber={props.pageNumber}/>
        </main>
    );
};

export default Main;