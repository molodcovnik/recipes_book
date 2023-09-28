import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";


import '../styles/Header.css'

const Header = () => {
    
    return (
        <div className='header-container'>
            <div className="logo">
            <img src="https://img.icons8.com/doodle/96/hamburger.png" alt="hamburger" onClick={() => {
                console.log('logo');
                window.location.pathname = '/';
            }}/>
            </div>
            <div className="name">
                Book of recipes
            </div>
            <div className='action'>
                <Link className='add-recipe' to='create'><FiPlus/></Link>

            </div>
        </div>
    );
};

export default Header;