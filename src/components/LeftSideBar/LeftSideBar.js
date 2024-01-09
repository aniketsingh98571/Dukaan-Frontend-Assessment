import React from "react"
import classes from './LeftSideBar.module.css'
import arrow from '../../assets/images/arrow.png'
import nish from '../../assets/images/nish.png'
import { list } from "../data/leftList"
import wallet from '../../assets/images/wallet.png'
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
                            <p>Visit store</p>
                        </div>
                    </div>
                    <div className={classes.TopArrowContainer}>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
                <div className={classes.ActionContainer}>
                    {
                        list.map((item,index)=>{
                            return (
                                <div className={item.name==="Payments"?[classes.SingleAction,classes.ActiveAction].join(" "):classes.SingleAction} key={item.key}>
                                    <div className={classes.ActionImage}>
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <div className={classes.ActionText}>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className={classes.CreditsContainer}>
                <div className={classes.CreditImage}>
                    <img src={wallet} alt="wallet"/>
                </div>
                <div className={classes.CreditsText}>
                    <p>Available Credits</p>
                    <p>222.10</p>
                </div>
            </div>
        </div> 
    )
}