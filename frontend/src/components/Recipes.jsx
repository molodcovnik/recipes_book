import React, { useEffect } from 'react';

import axios from 'axios';

import Recipe from './Recipe';
import '../styles/Recipes.css'

const Recipes = (props) => {

    const [recipes, setRecipes] = React.useState([]);
    const [url, setUrl] = React.useState(`http://127.0.0.1:8000/api/recipes/?page=${props.pageNumber}`)
    const [nextPage, setNextPage] = React.useState('')
    const [prevPage, setPrevPage] = React.useState('')
    
    useEffect(() => {
        axios.get(url).then(res=> {
                console.log(res);
                setNextPage(res.data.next);
                setPrevPage(res.data.previous);
                setRecipes(res.data.results);
                // console.log(prevPage !== null);
            })
    }, [url])
    return (
        <div className="main-content-wrapper">
            <div className="main-content">
            
                <div className='recipes-list'>
                    {recipes.map(recipe =>
                        <Recipe key={recipe.id} recipe={recipe}/>
                        )}
                    
                    
                </div>
                
            </div>
            <div className="buttons">
                <button className={prevPage ? 'prev-page' : 'hidden'} onClick={() =>{
                        // console.log('prev');
                        setUrl(prevPage);
                    }}>Prev page</button>
                <button className={nextPage ? 'next-page' : 'hidden'} onClick={() =>{
                        // console.log(nextPage);
                        setUrl(nextPage);
                        
                        
                    }}>Next page</button>
            </div>
        </div>
    );
};

export default Recipes;