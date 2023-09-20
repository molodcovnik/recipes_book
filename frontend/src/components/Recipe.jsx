import React from 'react';

import '../styles/Recipe.css'

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
                       
                    
                    
                </div>
    );
};

export default Recipe;