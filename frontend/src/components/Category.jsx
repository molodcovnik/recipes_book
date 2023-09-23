import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import store from '../store';
import '../styles/Category.css'


const Category = (props) => {
    
    return (
       <li onClick={() => {
        // console.log(props.category.name);
        store.dispatch({type: 'category/getCategory', payload: props.category.name});
        console.log(store.getState())
        
        }}>
            <Link to={`/category/${props.category.name}`}>{props.category.name}</Link>
        </li>
    );
};

export default Category;
{/* <a href={`/category/${props.category.name}`}>{props.category.name}</a> */}
