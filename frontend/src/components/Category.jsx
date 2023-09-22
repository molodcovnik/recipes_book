import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/Category.css'

const Category = (props) => {
    
    return (
       <li onClick={() => console.log(props.category.name)}>
            <Link to="/category">{props.category.name}</Link>
            {/* {props.category.name} */}
        </li>
    );
};

export default Category;
{/* <a href={`/category/${props.category.name}`}>{props.category.name}</a> */}
