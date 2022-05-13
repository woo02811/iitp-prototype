import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

function RestrictedPublicRoute() {
    /**
     * 로그인된 사용자가 URL 직접 입력으로 다시 로그인창으로 이동하려고 할 때 로그인창이 아니라 '/home' 으로 이동시키게 하기 위해 작성
     */
    const redirect = () => {
        return <Navigate to={'/home'} />
    }
    return localStorage.getItem('loginStatus') === 'Y' ? redirect(): <Outlet />;
}

export default RestrictedPublicRoute;