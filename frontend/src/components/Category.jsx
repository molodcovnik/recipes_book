import React from 'react';

import '../styles/Category.css'

const Category = (props) => {
    return (
       <li onClick={() => console.log(props.category.name)}>
            {props.category.name}
        </li>
    );
};

export default Category;