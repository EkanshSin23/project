import React from 'react'
import './homeone.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PublicIcon from '@mui/icons-material/Public';
import 'animate.css';

const Homeone = () => {
    return (
        <div className='homeone'>
            <div className="left">
                <div className="top">
                    <h1 className='title'>Find local service</h1>
                    <h1 className='title'>professionals </h1>
                    <h1 className='title'>for whatever you need</h1>
                    <span>Your Job Search Starts and ends With Us</span>
                </div>
                <div className="center">
                    <input type="text" placeholder='Job Title, Keywords, or Phrase' />
                    <div className="location">
                        <div className="icon"><PublicIcon /></div>

                        <select name="select" id="select">
                            <option value="">City, State or ZIP</option>
                            <option value="">UP</option>
                            <option value="">MP</option>
                            <option value="">Punjab</option>
                        </select>
                        <SearchOutlinedIcon className='searchIcon' />
                    </div>

                </div>
                <div className="bottom">
                    <div className="bottomTitle">Popular Searches</div>
                    <div className="tags">
                        <span className="tag">Full stack</span>
                        <span className="tag">Designer</span>
                        <span className="tag">Software</span>
                        <span className="tag">React</span>

                    </div>
                </div>
            </div>
            <div className="right">
                <div className="cards">
                    <div className="cardone animate__animated "></div>
                    <div className="cardtwo animate__animated "></div>
                    <div className="cardthree animate__animated "></div>
                    <div className="cardinfo">
                        <div className="content">
                            <div className="title">
                                <h1>319 <span>Job offers</span></h1>
                                <p>in Business Development</p>
                            </div>
                            <div className="title">
                                <h1>319 <span>Job offers</span></h1>
                                <p>in Business Development</p>
                            </div>
                            <div className="title">
                                <h1>319 <span>Job offers</span></h1>
                                <p>in Business Development</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="colordiv animate__animated "></div>

            </div>
        </div>
    )
}

export default Homeone