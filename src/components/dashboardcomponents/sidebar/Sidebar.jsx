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
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li><span> <HouseOutlinedIcon className='icon' />Dashboard</span></li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li><span> <CreateOutlinedIcon className='icon' />Edit Profile</span></li>
                    </Link>
                    <li><span><ContactPageOutlinedIcon className='icon' /> New Job Offers</span></li>
                    <li><span><BusinessCenterOutlinedIcon className='icon' /> Manage Jobs</span></li>
                    <li><span><AccountCircleOutlinedIcon className='icon' />Candidates</span></li>
                    <li><span><LockOutlinedIcon className='icon' />Change Password</span></li>
                    <br />
                    <p className="title">Insights</p>
                    <li><span><LocalPostOfficeOutlinedIcon className='icon' />Inbox </span></li>
                    <li><span><NotificationsNoneOutlinedIcon className='icon' />Notifications </span></li>
                    <li><span><SettingsOutlinedIcon className='icon' />Settings </span></li>


                </ul>
            </div>
        </div>
    )
}

export default Sidebar