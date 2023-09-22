import React from 'react';

import axios from 'axios';

import Recipe from './Recipe';
import '../styles/Recipes.css'

const Recipes = (props) => {

    const [recipes, setRecipes] = React.useState([]);
    
    if(!recipes.length) {
        axios.get(`http://127.0.0.1:8000/api/recipes/?page=${props.pageNumber}`).then(res=> {
        console.log(res);
        setRecipes(res.data.results);
    })
    }
    return (
        <div className="main-content">
           
            <div className='recipes-list'>
                {recipes.map(recipe =>
                    <Recipe key={recipe.id} recipe={recipe}/>
                    )}
                
                
            </div>
            <button className='next-page' onClick={() =>{
                console.log('next');
                
                console.log(props.pageNumber);
                
            }}>Next page</button>
        </div>
    );
};

export default Recipes;