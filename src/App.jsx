import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Error404 from "./pages/Error/Error404";
import Home2 from "./pages/Home2";
import PrivateRoute from "./components/Routes/PrivateRoute";
import RestrictedPublicRoute from "./components/Routes/RestrictedPublicRoute";
import Layouts from "./layouts/Layouts";

function App() {
    return (
        <Routes>
            <Route exact path={'/'} element={<RestrictedPublicRoute />}>
                <Route exact path={'/'} element={<Login/>}/>
            </Route>
          <Route element={<Layouts/>}>
            <Route exact path={'/home'} element={<Home/>}/>
            <Route exact path={'/home2'} element={<PrivateRoute />}>
                <Route exact path={'/home2'} element={<Home2/>}/>
            </Route>
            <Route exact path={'*'} element={<Error404/>}/>
          </Route>
        </Routes>
    );
}

export default App;
