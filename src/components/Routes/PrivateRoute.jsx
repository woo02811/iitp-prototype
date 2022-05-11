import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {render} from "react-dom";

function PrivateRoute() {
    const redirect = ()=>{
        alert('접근 권한이 없습니다.');
        return <Navigate to={'/'} />
    }
    return localStorage.getItem('a') === 'Y' ? <Outlet /> : redirect();
}

export default PrivateRoute;