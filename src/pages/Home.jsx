import React from 'react';
import '../App.css';
import logo from "../favicon.svg";

function Home(props) {
    localStorage.setItem('a','N');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                React
            </header>
        </div>
    );
}

export default Home;