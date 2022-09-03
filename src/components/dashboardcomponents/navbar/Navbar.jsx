import React, { createContext, useContext, useState } from 'react'
import './navbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { User, UserContext } from '../../../context/contextfile';

const Navbar = () => {
    const { sidebar, setsidebar } = useContext(User)
    const [isScrolled, setScroll] = useState(false);

    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? "navbar_dashboard scrolled " : "navbar_dashboard "}>

            <div className="navbar_dashboard_Container">
                <div className="left">
                    <span>JettHire</span>
                </div>

                <div className="right">

                    <div className="post ">Post a Job</div>
                    <div className='notification_navbar_icon'><span><NotificationsNoneIcon />
                        <span className="counter">2</span>
                    </span>
                    </div>
                    <div className="login_dashboard">Username <ArrowDropDownIcon /></div>
                    <div className="navbar_menu_icon" onClick={(e) => {
                        setsidebar(!sidebar)
                        console.log(sidebar)
                    }}><MenuIcon /></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar