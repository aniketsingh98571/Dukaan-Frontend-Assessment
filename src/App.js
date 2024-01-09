import React from "react";
import classes from './App.module.css'
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/RightSideBar/RightSideBar";
const App = () => {
  return (
    <div className={classes.AppContainer}>
      <LeftSideBar/>
      <RightSideBar/>
    </div>
  )
};

export default App;