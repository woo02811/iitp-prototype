import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import image1 from './img/login_logo.png'
import image2 from './img/login_img.png'
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(props) {
    let navigate = useNavigate();
    const [id, setId] = useState('');

    function updateId(e) {
        setId(e.target.value)
    }

    function login() {
        axios.post('http://localhost:8081/login/checkLogin.ajax', null, {
            params: {
                'userId': id,
                'password': 'adminpass12#$'
            }
        }).then((data) => {
            data.data.loginFailMessage === null ? navigate('/home') : alert(data.data.loginFailMessage);
        }).catch(()=>navigate('/error'))
        ;
    }


    return (
        <div className="loginBody">
            <div className="container login">
                <div className="row">
                    <div className="col-lg-12 col-xl-12 card flex-row mx-auto px-0">
                        <div className="card-body">
                            <h4 className="title logo"><img src={image1} alt="login"/></h4>
                            <form action="" className="form-box">
                                <label htmlFor="inputEmail" className="form-label mt-4">아이디</label>
                                <div className="form-input email">
                                    <input type="text"
                                           className="form-control"
                                           id="inputEmail"
                                           placeholder="Email"
                                           value={id}
                                           onChange={(e) => updateId(e)}
                                    />
                                </div>
                                <label htmlFor="inputPassword" className="form-label mt-3">비밀번호</label>
                                <div className="form-input pass">
                                    <input type="password" className="form-control" id="inputPassword"
                                           placeholder="Password"/>
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        로그인상태 유지
                                    </label>
                                </div>
                                <div className="mt-5 mb-5">
                                    <button type="button" className="btn btn-block" onClick={login}>로그인</button>
                                </div>
                            </form>
                        </div>
                        <div className="img-right">
                            <div className="img2"><img src={image2} className="img-fluid" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;