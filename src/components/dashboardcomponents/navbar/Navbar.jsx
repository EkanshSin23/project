import React, { useState } from 'react'
import './navbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
    // const [isScrolled, setScroll] = useState(false);
    // window.onscroll = () => {
    //     setScroll(window.pageYOffset === 0 ? false : true)
    //     return () => (window.onscroll = null)
    // }
    return (
        <div className="navbar_dashboard ">

            <div className="navbar_dashboard_Container">
                <div className="left">
                    <span>JettHire</span>
                </div>

                <div className="right">
                    {/* <div className={isScrolled ? "signup scroll " : "signup "}>Signup</div>
                    <div className={isScrolled ? "signup scroll " : "signup "}>Login</div> */}
                    {/* <div className={isScrolled ? "post scroll " : "post "}>Post a Job</div> */}
                    <div className="post ">Post a Job</div>
                    <div className='notification_navbar_icon'><span><NotificationsNoneIcon />
                        <span className="counter">2</span>
                    </span>
                    </div>
                    <div className="login_dashboard">Username <ArrowDropDownIcon /></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar