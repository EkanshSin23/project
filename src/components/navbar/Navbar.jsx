import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isScrolled, setScroll] = useState(false);
    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    console.log(isScrolled)
    return (
        <div className={isScrolled ? "navbar scrolled " : "navbar "}>
            <div className="navbarContainer">
                <div className="left">
                    <span>JettHire</span>
                </div>
                <div className="center">
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/" className='link'>Jobs</Link>
                    <Link to="/" className='link'>Companies</Link>
                    <Link to="/" className='link'>Candidates</Link>
                    <Link to="/" className='link'>Packages</Link>

                </div>
                <div className="right">
                    <div className={isScrolled ? "signup scroll " : "signup "}>Signup</div>
                    <div className={isScrolled ? "signup scroll " : "signup "}>Login</div>
                    <div className={isScrolled ? "post scroll " : "post "}>Post a Job</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar