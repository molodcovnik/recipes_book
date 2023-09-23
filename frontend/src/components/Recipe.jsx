import React from 'react';

import store from '../store';
import '../styles/Recipe.css'
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    return (
        <div className="item">
                    <div className="item-preview">
                        <p>{props.recipe.title}</p>
                        <p>Время готовки {props.recipe.cooking_time}</p>
                        <img src={props.recipe.preview_img ? props.recipe.preview_img : props.recipe.main_img} alt="main" />
                    </div>
                    <div className="category">
                        {props.recipe.category.map(catName =>
                            <p key={catName.id}>{catName.name}</p>
                            )}
                        
                    </div>
                        {/* <p>Категория:{recipe.category[0].name}</p> */}
                        {/* <button className='open-recipe' onClick={() => {
                            console.log(props.recipe.id)
                        }}>Читать</button> */}
                        <div className='btn'><Link className='btn-open' to={`/recipe/${props.recipe.id}`} onClick={() => {
                            console.log(props.recipe.id);
                            store.dispatch({type: 'recipe/getRecipe', payload: props.recipe.id});
                            console.log(store.getState())
                        }}>Читать</Link></div>
                    
                    
                </div>
    );
};

export default Recipe;