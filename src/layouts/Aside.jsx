import React from 'react';
import SMILELogo from './img/main_logo.png';
function Aside() {
  return (
    <aside className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img src={SMILELogo} alt="SMILE 보호관리"/>
      </div>
      <nav className="navbar-light">
        <ul className="gnb navbar-nav">
          <li className="py-1">
            <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse1" role="button"
               aria-expanded="false" aria-controls="collapse1">
              <span className="mname">생활치료센터 관리</span>
              <span className="right-icon ms-auto">
                                <i></i>
                            </span>
            </a>
            <div className="collapse" id="collapse1">
              <div className="card my-2">
                <ul className="submenu navbar-nav my-2 px-3">
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse1_1" role="button"
                       aria-expanded="false" aria-controls="collapse1_1">
                      <span className="sbname">환자 현황</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    {/*<!-- 현재 메뉴 활성 : active 추가 -->*/}
                    <div className="collapse" id="collapse1_1">
                      <a href="" className="nav-link fs12 active">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse1_2" role="button"
                       aria-expanded="false" aria-controls="collapse1_2">
                      <span className="sbname">대시보드</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse1_2">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse1_3" role="button"
                       aria-expanded="false" aria-controls="collapse1_3">
                      <span className="sbname">문의사항</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse1_3">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="py-1">
            <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse2" role="button"
               aria-expanded="false" aria-controls="collapse2">
              <span className="mname">자가격리자 관리</span>
              <span className="right-icon ms-auto">
                                <i></i>
                            </span>
            </a>
            <div className="collapse" id="collapse2">
              <div className="card">
                <ul className="submenu navbar-nav my-1 px-3">
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse2_1" role="button"
                       aria-expanded="false" aria-controls="collapse2_1">
                      <span className="sbname">환자 현황</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse2_1">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse2_2" role="button"
                       aria-expanded="false" aria-controls="collapse2_2">
                      <span className="sbname">대시보드</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse2_2">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse2_3" role="button"
                       aria-expanded="false" aria-controls="collapse2_3">
                      <span className="sbname">문의사항</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse2_3">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="py-1">
            <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse3" role="button"
               aria-expanded="false" aria-controls="collapse3">
              <span className="mname">기타</span>
              <span className="right-icon ms-auto">
                                <i></i>
                            </span>
            </a>
            <div className="collapse" id="collapse3">
              <div className="card">
                <ul className="submenu navbar-nav my-1 px-3">
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse3_1" role="button"
                       aria-expanded="false" aria-controls="collapse3_1">
                      <span className="sbname">환자 현황</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse3_1">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse3_2" role="button"
                       aria-expanded="false" aria-controls="collapse3_2">
                      <span className="sbname">대시보드</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse3_2">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                  <li>
                    <a className="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapse3_3" role="button"
                       aria-expanded="false" aria-controls="collapse3_3">
                      <span className="sbname">문의사항</span>
                      <span className="right-icon ms-auto"><i></i></span>
                    </a>
                    <div className="collapse" id="collapse3_3">
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                      <a href="" className="nav-link fs12">서브메뉴</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
