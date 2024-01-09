import React from "react"
import classes from './Transactions.module.css'
import sort from '../../../assets/images/sort.png'
import download from '../../../assets/images/download.png'
import search from '../../../assets/images/search.png'
import dark_arrow from '../../../assets/images/dark_arrow.png'
import arrow from '../../../assets/images/arrow.png'
import info from '../../../assets/images/info.png'
import {orders} from '../../data/orders'
export default function Transactions(){
    return(
        <div className={classes.OuterTransactionsContainer}>
            <div className={classes.InnerTransactionsContainer}>
                <div className={classes.TransactionContainer}>
                    <div className={classes.TransactionText}>
                     <span>Transactions</span>   <p>This month</p>
                    </div>
                </div>
                <div className={classes.TransactionTable}>
                    <div className={classes.UpperContainer}>
                        <div className={classes.SearchContainer}>
                            <div className={classes.SearchImage}>
                                <img src={search} alt="search"/>
                            </div>
                            <div className={classes.InputContainer}>
                                <input type="input" placeholder="Search by order ID..."/>
                            </div>
                        </div>
                        <div className={classes.UpperRightContainer}>
                            <div className={classes.SortContainer}>
                                <p>Sort</p>
                                <img src={sort} alt="sort"/>
                            </div>
                            <div className={classes.DownLoadContainer}>
                                <img src={download} alt="download"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.TableContents}>
                        <div className={classes.LabelsContainer}>
                            <div>
                              <p>Order ID</p>
                            </div>
                            <div className={classes.OrderDate}>
                                <p>Order date</p>
                                <img src={dark_arrow} alt="arrow"/>
                            </div>
                            <div>
                              <p>Order amount</p>
                            </div>
                            <div className={classes.TransactionContainer}>
                                <p>Transaction fees</p>
                                <img src={info} alt="info"/>
                            </div>
                        </div>
                        <div className={classes.RecordsContainer}>
                            {
                                orders.map((order)=>{
                                    return (
                                        <div className={classes.SingleRecord}>
                                        <p>{order.orderId}</p>
                                        <p>{order.orderData}</p>
                                        <p>{order.orderAmount}</p>
                                        <p>₹{order.transactionFees}</p>
                                    </div>
                                    )
                                })
                            }
                           
                        </div>
                        <div className={classes.TransitionContainer}>
                            <div className={classes.PreviousButton}>
                                <button type="button">
                                    <img src={arrow} alt="arrow"/>
                                    Previous
                                </button>
                            </div>
                            <div className={classes.Buttons}>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                            <div className={classes.NextButton}>
                                <button type="button">
                                    Next
                                    <img src={arrow} alt="arrow"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}