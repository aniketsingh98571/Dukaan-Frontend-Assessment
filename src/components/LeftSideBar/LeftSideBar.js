import React from "react"
import classes from './LeftSideBar.module.css'
import arrow from '../../assets/images/arrow.png'
import nish from '../../assets/images/nish.png'
import { list } from "../data/leftList"
export default function LeftSideBar(){
    return (
        <div className={classes.OuterListContainer}>
            <div className={classes.InnerListContainer}>
                <div className={classes.TopLeftContainer}>
                    <div className={classes.FirstTopLeft}>
                        <div className={classes.LogoContainer}>
                            <img src={nish} alt="brand logo"/>
                        </div>
                        <div className={classes.TextLogoContainer}>
                            <p>Nishyan</p>
                            <p>Visit Store</p>
                        </div>
                    </div>
                    <div className={classes.TopArrowContainer}>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </div> 
    )
}