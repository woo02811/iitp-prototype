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
      <>
        <div className="row row1">
          <div className="col-lg-12">
            <div className="card indiv">
              <div className="card-content">
                <div className="table-responsive">
                  <div className="table-header">
                    <form>
                      <div className="d-flex">
                        <div className="tbl_title">공통코드 구분</div>
                        <div className="me-3 d-flex">
                          <span className="stit">코드</span>
                          <input className="form-control w160" type="text" maxLength="5"/>
                        </div>
                        <div className="me-3 d-flex">
                          <span className="stit">명칭</span>
                          <input className="form-control w160" type="text" maxLength="50"/>
                        </div>
                        <div className="me-1 d-flex">
                          <span className="stit">사용여부</span>
                          <select className="form-select">
                            <option>전체</option>
                            <option>사용</option>
                            <option>미사용</option>
                          </select>
                        </div>
                        <div className="ms-auto">
                          <div className="btn_wrap d-flex">
                            <button type="button" className="btn btn-gray">검색</button>
                            <button type="button" className="btn btn-white btn-new">신규</button>
                            <button type="button" className="btn btn-ccolor">저장</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="table-body height100">
                    <table className="data-table table table-striped table-hover table-new table-fixed">
                      <thead>
                      <tr>
                        <th className="cd1"></th>
                        <th className="cd2">구분코드</th>
                        <th className="cd3">구분코드명</th>
                        <th className="cd4">업무구분</th>
                        <th className="cd5">사용</th>
                        <th className="cd6">리마크</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <select className="form-select" disabled>
                            <option>업무구분</option>
                            <option value="1" selected>One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </td>
                        <td className="cd5">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" disabled/>
                        </td>
                        <td className="cd6 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <select className="form-select" disabled>
                            <option>업무구분</option>
                            <option value="1">One</option>
                            <option value="2" selected>Two</option>
                            <option value="3">Three</option>
                          </select>
                        </td>
                        <td className="cd5">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd6 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <select className="form-select" disabled>
                            <option>업무구분</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3" selected>Three</option>
                          </select>
                        </td>
                        <td className="cd5">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd6 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row2 mt-4">
          <div className="col col-lg-12">
            <div className="card indiv">
              <div className="card-content">
                <div className="table-responsive">
                  <div className="table-header">
                    <form>
                      <div className="d-flex">
                        <div className="tbl_title">공통코드</div>
                        <div className="me-1 d-flex">
                          <span className="stit">사용여부</span>
                          <select className="form-select">
                            <option>전체</option>
                            <option>사용</option>
                            <option>미사용</option>
                          </select>
                        </div>
                        <div className="ms-auto">
                          <div className="btn_wrap d-flex">
                            <button type="button" className="btn btn-gray">검색</button>
                            <button type="button" className="btn btn-white btn-new2">신규</button>
                            <button type="button" className="btn btn-ccolor">저장</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="table-body height100">
                    <table className="data-table table table-striped table-hover table-new2 table-fixed">
                      <thead>
                      <tr>
                        <th className="cd1"></th>
                        <th className="cd2">구분코드</th>
                        <th className="cd3">구분코드명</th>
                        <th className="cd4">사용</th>
                        <th className="cd5">속성1</th>
                        <th className="cd6">속성2</th>
                        <th className="cd7">속성3</th>
                        <th className="cd8">속성4</th>
                        <th className="cd9">속성5</th>
                        <th className="cd10">리마크</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="cd1">
                          <input className="form-check-input checkbox-active" type="checkbox" value="" id=""/>
                        </td>
                        <td className="cd2">
                          <div className="checked-text">COM_CD</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="COM_CD"/>
                          </div>
                        </td>
                        <td className="cd3">
                          <div className="checked-text">구분코드명입니다 ABC</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="구분코드명입니다 ABC"/>
                          </div>
                        </td>
                        <td className="cd4">
                          <input className="form-check-input use-check" type="checkbox" value="" id="" checked disabled/>
                        </td>
                        <td className="cd5">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd6">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd7">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd8">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd9">
                          <div className="checked-text">속성</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control text-center" value="속성"/>
                          </div>
                        </td>
                        <td className="cd10 text-start">
                          <div className="checked-text">리마크리마크리마크리마크리마크리마크리마크리마크리마크</div>
                          <div className="checked-contents">
                            <input type="text" className="form-control" value="리마크리마크리마크리마크리마크리마크리마크리마크리마크"/>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;
