import React from 'react'
import './subscribe.scss'
const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="container">
                <div className="title">
                    <h1>Stay Up To Date</h1>
                    <p>Subscribe to our newsletter to receive our weekly feed</p>
                </div>
                <div className="centerImg">
                    <img src="https://pixelprime.co/themes/jobster-wp/demo-1/wp-content/uploads/2022/06/subscribe.png" alt="" />
                </div>
                <div className="input">
                    <input type="text" placeholder='Enter Email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe