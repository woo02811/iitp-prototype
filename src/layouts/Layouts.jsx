import React from 'react';
import {Outlet} from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './style.css';
import styled from "styled-components";

const LayoutBody = styled.div`
  background: #f5f5f5;
  min-width: 1400px;
`

function Layouts(props) {
  return (
    <LayoutBody>
      <div className="d-flex" id={'wrapper'}>
        <Aside/>
        <div id="page-content-wrapper">
          <Header/>
          <Main>
            <Outlet/>
          </Main>
        </div>
      </div>
    </LayoutBody>
  );
}

export default Layouts;
