import React from 'react';
import '../App.css';
import logo from "../favicon.svg";
import {Navigate, useNavigate} from "react-router-dom";

function Home(props) {
    //페이지 이동을 위해 UseNavigate 사용
    const navigate = useNavigate();
    localStorage.setItem('loginStatus','Y');

    const logOut = () => {
        localStorage.setItem('loginStatus','N');
        return navigate('/')
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button className={"m-5 btn-lg btn-primary"} type="button" onClick={logOut}>LogOut</button>
            </header>
        </div>
    );
}

export default Home;