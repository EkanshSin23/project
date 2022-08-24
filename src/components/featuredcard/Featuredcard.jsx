import React from 'react'
import './featuredcard.scss'
import { Link } from 'react-router-dom'
import WorkIcon from '@mui/icons-material/Work';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PublicIcon from '@mui/icons-material/Public';

const Featuredcard = () => {
    return (
        <div className="featuredContainer">
            <div className='featuredcard animate__animated animate__fadeInUp' >
                <div className="top">
                    <div className="topTop">
                        <LocalAtmIcon className='icon' />
                        <Link to='/' className='link'>Finance</Link>

                    </div>
                    <div className="centerTop">Financial Analyst</div>
                    <div className="bottomTop">
                        <div className="left"><span><PublicIcon /></span>
                            <span> UttarPradesh</span></div>
                        <div className="right"> Full Time</div>
                    </div>

                </div>
                <div className="bottom">
                    <div className="leftBottom">
                        <div className="date">June 8, 2022 by</div>
                        <div className="name">Gramware</div>
                    </div>
                    <div className="rightBottom"><img src="https://pixelprime.co/themes/jobster-wp/demo-1/wp-content/uploads/2022/06/company-logo-5-160x160.png" alt="" /></div>
                </div>

            </div>

        </div>
    )
}

export default Featuredcard