import React from 'react';

function Header(props) {
  return (

    <nav className="page-head">
      <button type="button" id="menu-toggle"/>
      <h2 className="page-title">공통코드 관리</h2>
      <a href="" className="logout">
        <span>로그아웃</span>
        <i/>
      </a>
    </nav>
  );
}

export default Header;
