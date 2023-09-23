import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios';

import '../styles/CurrentRecipe.css'


const selectRecipe = state => state.recipe.recipe;


const CurrentRecipe = () => {

    const recipeItems = useSelector(selectRecipe);
    let recipeId = recipeItems.at(-1).id;

    // const [recipe, setRecipe] = React.useState([]);
    
    const [categories, setCategories] = React.useState([]);
    const [title, setTitle] = React.useState([]);
    const [ingridient, setIngridient] = React.useState([]);
    const [mainImg, setMainImg] = React.useState([]);
    const [previewImg, setPreviewImg] = React.useState([]);
    const [text, setText] = React.useState([]);
    const [timeAdd, setTimeAdd] = React.useState([]);
    const [date, setDate] = React.useState([]);
    const [time, setTime] = React.useState([]);

    const [cookingTime, setCookingTime] = React.useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes/?id=${recipeId}`)
        .then(res => {
            // console.log(res.data.results);
            setCategories(res.data.results.at(0).category);
            setTitle(res.data.results.at(0).title);
            setIngridient(res.data.results.at(0).ingredients);
            setText(res.data.results.at(0).text);
            setCookingTime(res.data.results.at(0).cooking_time);
            // setTimeAdd(res.data.results.at(0).time_add);
            setMainImg(res.data.results.at(0).main_img);
            setPreviewImg(res.data.results.at(0).preview_img);
            setTime(res.data.results.at(0).time_add.slice(11,16))
            setDate(res.data.results.at(0).time_add.slice(0,10))
        })
    }, [recipeId])
   

    return (
        <div className='recipe'>
            <div className="title">
                <h2>{title}</h2>
                <p>{cookingTime}</p>
            </div>
            <div className='categories'>
                {categories.map(category =>
                    <span key={category.id}>{category.name}</span>)}    
            </div>
            <p>{ingridient}</p>
            <p>{text}</p>
            <span>{date}</span>
            <span> {time}</span>
           
            
             <img src={mainImg} alt="main" width={400} height={200}/> 
        </div>
    );
};

export default CurrentRecipe;