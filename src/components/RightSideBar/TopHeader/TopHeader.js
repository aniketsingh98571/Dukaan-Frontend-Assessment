import React from "react"
import faq from '../../../assets/images/faq.png'
import search from '../../../assets/images/search.png'
import announcement from '../../../assets/images/announcement.png'
import dark_arrow from '../../../assets/images/dark_arrow.png'
import classes from './TopHeader.module.css'
export default function TopHeader(){
    return (
        <div className={classes.TopHeaderOuterContainer}>
        <div className={classes.TopHeaderInnerContainer}>
            <div className={classes.InnerFlexContainer}>
                <div className={classes.LeftContainer}>
                    <div className={classes.PaymentsText}>
                        <p>Payments</p>
                    </div>
                    <div className={classes.WorksContainer}>
                        <img src={faq} alt="faq"/>
                        <p>How it works</p>
                    </div>
                </div>
                <div className={classes.MiddleContainer}>
                    <div className={classes.SearchImage}>
                        <img src={search} alt="search"/>
                    </div>
                    <div className={classes.InputContainer}>
                        <input type="text" placeholder="Search features, tutorials, etc."/>
                    </div>
                </div>
                <div className={classes.RightContainer}>
                    <div className={classes.AnnouncementContainer}>
                        <img src={announcement} alt="announcement"/>
                    </div>
                    <div className={classes.DarkArrowContainer}>
                        <img src={dark_arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}