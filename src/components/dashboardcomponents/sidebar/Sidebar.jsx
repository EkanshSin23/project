import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Sidebar = () => {
    return (
        <div className='sidebar'>


            <div className="center">
                <ul>

                    <p className="title">Admin Tools</p>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <li><span> <HouseOutlinedIcon className='icon' />Dashboard</span></li>
                    </Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li><span> <CreateOutlinedIcon className='icon' />Edit Profile</span></li></Link>

                    <Link to="/dashboard" style={{ textDecoration: "none" }}>  <li><span><ContactPageOutlinedIcon className='icon' /> New Job Offers</span></li>
                    </Link>
                    <Link to="/managejob" style={{ textDecoration: "none" }}><li><span><BusinessCenterOutlinedIcon className='icon' /> Manage Jobs</span></li> </Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}>   <li><span><AccountCircleOutlinedIcon className='icon' />Candidates</span></li></Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}>  <li><span><LockOutlinedIcon className='icon' />Change Password</span></li></Link>
                    <br />
                    <p className="title">Insights</p>
                    <Link to="/profile" style={{ textDecoration: "none" }}> <li><span><LocalPostOfficeOutlinedIcon className='icon' />Inbox </span></li></Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}>  <li><span><NotificationsNoneOutlinedIcon className='icon' />Notifications </span></li></Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}> <li><span><SettingsOutlinedIcon className='icon' />Settings </span></li></Link>


                </ul>
            </div>
        </div>
    )
}

export default Sidebar