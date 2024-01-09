import React from "react"
import classes from './RightSideBar.module.css'
import TopHeader from "./TopHeader/TopHeader"
import Overview from "./Overview/Overview"
import Transactions from "./Transactions/Transactions"
export default function RightSideBar(){
    return (
        <div className={classes.OuterRightContainer}>
            <TopHeader/>
            <Overview/>
            <Transactions/>
        </div>
    )
}