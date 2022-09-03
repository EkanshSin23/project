// import { Modal } from 'bootstrap'
import React, { useContext } from 'react'
import { Modal, ModalHeader } from 'reactstrap'

import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Homeone from '../../components/homeone/Homeone'
import Hometwo from '../../components/hometwo/Hometwo'
import Navbar from '../../components/navbar/Navbar'
import Subscribe from '../../components/subscribe/Subscribe'
import { User } from '../../context/contextfile'
import Login from '../login/Login'

import './home.scss'
const Home = () => {
  
   
    return (
        <div className='home'>

            
            <Login />
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