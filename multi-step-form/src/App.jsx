import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <div className="app ">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="form-content"></div>
      </div>
    </>
  );
};

export default App;
