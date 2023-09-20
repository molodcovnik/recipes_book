import React from "react";
import axios from 'axios';

import Category from "./Category";

import "../styles/Categories.css";


const Sidebar = () => {

    const [categories, setCategories] = React.useState([]);

    if(!categories.length) {
        axios.get('http://127.0.0.1:8000/api/categories/').then(res => {
        console.log(res);
        setCategories(res.data.results);
        })
    }
    return (
        <div className="sidebar">
            <ul>
                {categories.map(category => 
                    <Category key={category.id} category={category}/>
                )}
            </ul>
            
        </div>
    );
};

export default Sidebar;