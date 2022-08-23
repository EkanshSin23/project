import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import WorkIcon from '@mui/icons-material/Work';
const Card = () => {
    return (
        <div className='card animate__animated animate__fadeInUp' >
            <div className="icons ">
                <WorkIcon className='icon' />
            </div>
            <div className="title">Buisness Developement</div>
            <div className="detail"><Link to="/" className='link'>2 open positions</Link> </div>
            <div className="detail"><Link to="/" className='link'>Follow</Link> </div>
        </div>
    )
}

export default Card