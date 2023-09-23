import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import Recipe from './Recipe';
import '../styles/CurrentCategory.css'


const selectCategory = state => state.category.category;

const CurrentCategory = () => {
    
    const categoryItems = useSelector(selectCategory);
    let categoryName = categoryItems.at(-1).name;
    
    const [recipes, setRecipes] = React.useState([]);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes/?category=${categoryName}`)
        .then(res => {
                console.log(res.data.results);
                setRecipes(res.data.results);
            })
    }, [categoryName])

    
    return (
        <div className='current-category'>
            <h2>{categoryName}</h2>
           
            <div className='recipes-list'>
                {recipes.map(recipe =>
                    <Recipe key={recipe.id} recipe={recipe}/>
                    )}
            </div>
            
            
            
        </div>
    );
};

export default CurrentCategory;