import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowseRouter as Router ,Link,Route } from 'react-router-dom';
import { BrowserRouter as Router ,Link, Route,Routes } from "react-router-dom";


import Home from './Home';
import About from './About';
function Header() {
    return (
        <div >
     <Router >
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
        </Routes>
       

     </Router>
       </div>
    );
}

export default Header;

 