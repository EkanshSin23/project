import React from 'react'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Homeone from '../../components/homeone/Homeone'
import Hometwo from '../../components/hometwo/Hometwo'
import Navbar from '../../components/navbar/Navbar'
import Subscribe from '../../components/subscribe/Subscribe'

import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="homeContainer">
                <Homeone />
                <Hometwo />
                <Featured />
                <Subscribe />
                <Footer />

            </div>

        </div>
    )
}

export default Home