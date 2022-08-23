import React, { useRef, useState } from 'react'
import Card from '../card/Card'
import './hometwo.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Hometwo = () => {
    const slide = useRef()
    const [slider, setslider] = useState(0)
    const [isMoved, setisMoved] = useState(false)

    const handleClick = (direction) => {
        setisMoved(true);
        const distance = slide.current.getBoundingClientRect().x - 100;
        console.log(distance);
        if (direction === 'right' && slider < 6) {
            setslider(slider + 1);
            console.log(slider)
            slide.current.style.transform = `translateX(${-320 + distance}px)`
        }
        if (direction === 'left' && slider > 0) {
            setslider(slider - 1);
            console.log(slider)
            slide.current.style.transform = `translateX(${320 + distance}px)`
        }



    }
    return (
        <div className='hometwo'>
            <div className="container">
                <div className="top">
                    <h1>Search By Category</h1>
                    <p>Search your career opportunity with our categories</p>
                </div>
                <div className="center">
                    <div className="cardss" ref={slide}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />


                    </div>
                </div>
                <div className="bottom">
                    <div className="dot left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}><ChevronLeftIcon /></div>

                    <div className="dot right" onClick={() => handleClick("right")}><ChevronRightIcon /></div>
                </div>
            </div>

        </div >
    )
}

export default Hometwo