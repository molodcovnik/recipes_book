import React from "react";


import Main from "./Main";
import Header from "./Header";


import "../styles/App.css";



function App () {
    let pageNumber = 1;
    return (
        <>
            <Header/>
            <Main pageNumber={pageNumber}/>
    
        </>
    )
}

export default App;