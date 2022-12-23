import React, { useEffect, useState } from 'react'
import carFront from '../assets/images/car_front.png'
import fusoSmall from '../assets/images/fuso.png'
import outlanderSmall from '../assets/images/outlander.png'
import './Banner2.css'
const Banner2 = () => {
    const [frontSrc, setFrontSrc] = useState(carFront)
    const [fusoSrc, setFusoSrc] = useState(fusoSmall)
    const [outSrc, setOutSrc] = useState(outlanderSmall)

    const [rotateDeg, setRotateDeg] = useState(45)

    const fusoClick = () => {
        let rotCircle = document.getElementById("rotCircle")
        rotCircle.style.transform = `rotate(${rotateDeg}deg)`
        setRotateDeg((rotateDeg) => rotateDeg + 45)
    }

    useEffect(() => {
        console.log(rotateDeg)
    }, [rotateDeg])

    return (
        <>
            <div className="semi-circle">
                <div className="d-flex justify-content-center">
                    <div className="rotating-circle" onClick={fusoClick} id='rotCircle'>

                        <img id='outlander' src={outSrc} />

                        <img id='fuso' src={fusoSrc} />
                        <img id='front' src={frontSrc} />
                    </div>


                    {/* <div id='small-semi' className="small-semi-circle">

                    </div> */}

                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Banner2