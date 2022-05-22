import React, {useEffect} from 'react';
import '../App.css';
import logo from "../favicon.svg";
import {useNavigate} from "react-router-dom";
import AuthorizationAxios from "../hooks/AuthorizationAxios";
import axios from "axios";

function Home(props) {
  useEffect(()=>{
    AuthorizationAxios.get('https://jsonplaceholder.typicode.com/users/1').then(data=>console.log(data));
    axios.get('https://jsonplaceholder.typicode.com/users/2').then(data=>console.log(data));
  },[])
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
