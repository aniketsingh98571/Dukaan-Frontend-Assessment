import React from "react";
import classes from './App.module.css'
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
const App = () => {
  return (
    <div className={classes.AppContainer}>
      <LeftSideBar/>
    </div>
  )
};

export default App;