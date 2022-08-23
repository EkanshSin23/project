import React from 'react'
import './featured.scss'

import Featuredcard from '../featuredcard/Featuredcard';
const Featured = () => {
    return (
        <div className='featured'>
            <div className="top"></div>
            <div className="container">
                <Featuredcard />
                <Featuredcard />
                <Featuredcard />
                <Featuredcard />
                <Featuredcard />
                <Featuredcard />
                <Featuredcard />
                <Featuredcard />
            </div>
            <div className="bottom"></div>

        </div>
    )
}

export default Featured