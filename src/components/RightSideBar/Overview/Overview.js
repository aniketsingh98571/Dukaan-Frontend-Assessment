import React from "react"
import classes from './Overview.module.css'
import arrow from '../../../assets/images/arrow.png'
export default function Overview(){
    return (
        <div className={classes.OuterOverviewContainer}>
           <div className={classes.InnerOverviewContainer}>
             <div className={classes.UpperFlexContainer}>
                <div className={classes.OverviewText}>
                    <p>Overview</p>
                </div>
                <div className={classes.SortContainer}>
                    <div className={classes.InnerSortContainer}>
                        <p>Last Month</p>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
              </div>
              <div className={classes.OrdersOverview}>
                <div className={classes.Online}>
                    <p>Online orders</p>
                    <p>231</p>
                </div>
                <div className={classes.Amountreceived}>
                    <p>Amount received</p>
                    <p>₹ 23,92,321</p>
                </div>
              </div>
            </div>
        </div>
    )
}
