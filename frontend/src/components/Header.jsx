import React from 'react';

import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
            <img src="https://img.icons8.com/doodle/96/hamburger.png" alt="hamburger"/>
            </div>
            <div className="name">
                Book of recipes
            </div>
        </div>
    );
};

export default Header;