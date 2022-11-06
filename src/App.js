import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import SignIn from "./component/SingIn";
import SignUp from "./component/SignUp";
import BarChart from "./component/BarChart"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SignUp />} path="/signup" />
          <Route element={<SignIn />} path="/" />
          <Route  element={<BarChart/>} path='/chart'/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
