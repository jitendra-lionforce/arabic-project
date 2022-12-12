import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import carFront from '../assets/images/car_front.png'
import carFrontSmall from '../assets/images/car_front_small.png'
import fuso from '../assets/images/fuso.png'
import outlander from '../assets/images/outlander.png'
import './Banner.css'
const Banner = () => {
    const ref = useRef(null)
    const [bool, setBool] = useState(false)
    const [text, setText] = useState('')
    React.useEffect(() => {
        function handleResize() {
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            initialPosTranslate()
        }

        window.addEventListener('resize', handleResize)
    })
    useEffect(() => {
        initialPosTranslate()

    }, [])

    function initialPosTranslate() {
        let smallSemiOffset = document.getElementById('small-semi').offsetLeft
        let smallSemiW = document.getElementById('small-semi').clientWidth
        let smallSemiH = document.getElementById('small-semi').offsetHeight
        let middleSemi = document.getElementById('small-semi').offsetWidth / 2

        let outW = document.getElementById('outlander').clientWidth
        let fusoNewPosX = smallSemiW + 200
        let frontNewPosX = middleSemi + 100
        let outPosX = smallSemiOffset - 200
        document.getElementById("outlander").style.left = `${outPosX}px`;
        document.getElementById("fuso").style.left = `${outPosX}px`;
        document.getElementById("front").style.left = `${outPosX}px`;
        let outTranslate = getTranslateValues(document.getElementById("outlander"))
        let outTranslateX = outTranslate.x

        if (outTranslateX === 0) {
            document.getElementById("fuso").style.transform = `translate(${fusoNewPosX}px,0%)`
            document.getElementById("front").style.transform = `translate(${frontNewPosX}px,${smallSemiH}px)`
            return
        }

        let fusoTranslate = getTranslateValues(document.getElementById("outlander"))
        let fusoTranslateX = fusoTranslate.x
        if (fusoTranslateX === 0) {
            document.getElementById("outlander").style.transform = `translate(${fusoNewPosX}px,0%)`
            document.getElementById("front").style.transform = `translate(${frontNewPosX}px,${smallSemiH}px)`
        }
    }

    let rotateDeg = 90
    const rotate = () => {
        ref.current.style.transform = `rotate(${rotateDeg}deg)`
        rotateDeg += 90
    }
    let fusoVal = document.getElementById("fuso")
    let frontVal = document.getElementById("front")
    // if (frontVal) {
    //     frontVal.addEventListener("click", function () {
    //         let translateVal = (getTranslateValues(document.getElementById("front")));
    //         console.log(translateVal);
    //         if (translateVal.x > 0) {
    //             document.getElementById("front").style.transform = "translate(0%,0%)"
    //             document.getElementById("fuso").style.transform = "translate(0%,0%)"
    //             document.getElementById("outlander").style.transform = "translate(0%,0%)"
    //         } else if (translateVal.x < 0) {
    //             document.getElementById("front").style.transform = "translate(0%,0%)"
    //             document.getElementById("outlander").style.transform = "translate(0%,0%)"
    //             document.getElementById("fuso").style.transform = "translate(0%,0%)"

    //         }
    //     })
    // }

    function frontClick() {
        let outPos = getTranslateValues(document.getElementById("outlander"))
        let outPosX = outPos.x
        if (outPosX === 0) {
            return
        }
        let smallSemiW = document.getElementById('small-semi').offsetWidth
        let smallSemiH = document.getElementById('small-semi').offsetHeight
        let middleSemi = document.getElementById('small-semi').offsetWidth / 2

        let frontNewPosX = middleSemi + 100
        let fusoNewPosX = smallSemiW + 200
        // let frontNewPosX = middleSemi + 100

        document.getElementById("fuso").style.transform = `translate(${fusoNewPosX}px,0%)`
        document.getElementById("front").style.transform = `translate(${frontNewPosX}px,${smallSemiH}px) scale(1.5)`
        document.getElementById("outlander").style.transform = `translate(0,0)`
        // if (translateVal.x > 0) {
        // document.getElementById("front").style.transform = "translate(0%,0%)"
        // document.getElementById("fuso").style.transform = "translate(0%,0%)"
        // document.getElementById("outlander").style.transform = "translate(0%,0%)"
        // } else if (translateVal.x < 0) {
        //     document.getElementById("front").style.transform = "translate(0%,0%)"
        //     document.getElementById("outlander").style.transform = "translate(0%,0%)"
        //     document.getElementById("fuso").style.transform = "translate(0%,0%)"

        // }
    }

    function fusoClick() {

        document.getElementById("front").style.transform = `translate(0px,0%)`

        let smallSemiW = document.getElementById('small-semi').offsetWidth
        let smallSemiH = document.getElementById('small-semi').offsetHeight

        let halfSemiW = document.getElementById('small-semi').offsetWidth / 2
        let fusoNewPosX = halfSemiW + 100
        let outNewPosX = smallSemiW + 200

        // document.getElementById("front").style.transform = `translate(${smallSemiW}px,0%)`
        document.getElementById("fuso").style.transform = `translate(${fusoNewPosX}px,${smallSemiH}px) scale(1.5)`
        document.getElementById("outlander").style.transform = `translate(${outNewPosX}px,0)`

        // let fusoTranslateVal = (getTranslateValues(document.getElementById("fuso")));
        // console.log(fusoTranslateVal);
        // if (fusoTranslateVal.y > 0) {
        //     return
        // }
        // let outOffset = getOffset(document.getElementById("outlander"))
        // let frontOffset = getOffset(document.getElementById("front"))
        // let fusoOffset = getOffset(document.getElementById("fuso"))
        // if (fusoTranslateVal.x < 0) {
        //     let frontNewPos = frontOffset.left - fusoOffset.left
        //     let fusoNewPosX = outOffset.left - fusoOffset.left
        //     let fusoNewPosY = outOffset.top
        //     let frontNewPosY = frontOffset.top

        //     let outNewPosX = frontOffset.left
        //     document.getElementById("fuso").style.transform = `translate(-${fusoNewPosX}px,${fusoNewPosY}px)`
        //     document.getElementById("front").style.transform = `translate(-${frontNewPos}px,-${frontNewPosY}px)`
        //     document.getElementById("outlander").style.transform = `translate(0,0%)`
        //     return
        // }

        // let frontNewPos = frontOffset.left - outOffset.left
        // let fusoNewPosX = fusoOffset.left - frontOffset.left
        // let fusoNewPosY = frontOffset.top
        // let frontNewPosY = frontOffset.top

        // let outNewPosX = fusoOffset.left - outOffset.left

        // // let containerWidth = document.getElementById("mydiv").offsetWidth

        // document.getElementById("fuso").style.transform = `translate(-${fusoNewPosX}px,${fusoNewPosY}px)`
        // document.getElementById("front").style.transform = `translate(-${frontNewPos}px,-${frontNewPosY}px)`
        // document.getElementById("outlander").style.transform = `translate(${outNewPosX}px,0%)`
    }
    // if (fusoVal) {

    //     fusoVal.addEventListener("click", function () {
    //         let translateVal = (getTranslateValues(document.getElementById("fuso")));
    //         console.log(translateVal);
    //         this.style.transform = "translate(-270%,150%)"
    //         document.getElementById("front").style.transform = "translate(-125%,-97%)"
    //         document.getElementById("outlander").style.transform = "translate(550%,0%)"
    //         // getTranslateX()

    //     });
    // }
    let outlanderVal = document.getElementById("outlander")
    // if (outlanderVal) {

    //     outlanderVal.addEventListener("click", function () {
    //         this.style.transform = "translate(270%,200%)"
    //         document.getElementById("fuso").style.transform = "translate(-600%,00%)"
    //         document.getElementById("front").style.transform = "translate(125%,-97%)"
    //     });
    // }

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    function outClick() {
        let outOffset = getOffset(document.getElementById("outlander"))
        let frontOffset = getOffset(document.getElementById("front"))
        let fusoOffset = getOffset(document.getElementById("fuso"))
        document.getElementById("fuso").style.transform = `translate(0px,0%)`

        let smallSemiW = document.getElementById('small-semi').offsetWidth
        let smallSemiH = document.getElementById('small-semi').offsetHeight

        let halfSemiW = document.getElementById('small-semi').offsetWidth / 2

        let frontNewPosX = smallSemiW + 200
        let outPosX = halfSemiW + 100
        // document.getElementById("front").style.transform = `translate(${smallSemiW}px,0%)`
        // if(outTranslateX === 0) {
            
            document.getElementById("outlander").style.transform = `translate(${outPosX}px,${smallSemiH}px) scale(1.5)`
        // }
        document.getElementById("front").style.transform = `translate(${frontNewPosX}px,0)`
        // let frontNewPos = frontOffset.left - outOffset.left
        // let outNewPosX = frontOffset.left - outOffset.left
        // let outNewPosY = frontOffset.top
        // let frontNewPosY = frontOffset.top

        // let fusoNewPosX = fusoOffset.left - outOffset.left
        // document.getElementById("outlander").style.transform = `translate(${outNewPosX}px,${outNewPosY}px)`
        // document.getElementById("fuso").style.transform = `translate(-${fusoNewPosX}px,00%)`
        // document.getElementById("front").style.transform = `translate(${frontNewPos}px,-${frontNewPosY}px)`
    }
    function getTranslateValues(element) {
        const style = window.getComputedStyle(element)
        const matrix = style['transform'] || style.webkitTransform || style.mozTransform

        // No transform property. Simply return 0 values.
        if (matrix === 'none' || typeof matrix === 'undefined') {
            return {
                x: 0,
                y: 0,
                z: 0
            }
        }

        // Can either be 2d or 3d transform
        const matrixType = matrix.includes('3d') ? '3d' : '2d'
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

        // 2d matrices have 6 values
        // Last 2 values are X and Y.
        // 2d matrices does not have Z value.
        if (matrixType === '2d') {
            return {
                x: matrixValues[4],
                y: matrixValues[5],
                z: 0
            }
        }

        // 3d matrices have 16 values
        // The 13th, 14th, and 15th values are X, Y, and Z
        if (matrixType === '3d') {
            return {
                x: matrixValues[12],
                y: matrixValues[13],
                z: matrixValues[14]
            }
        }
    }
    return (
        <>
            <div className="semi-circle">
                <div className="d-flex justify-content-center">

                    <img id='outlander' onClick={outClick} src={outlander} />

                    <img id='fuso' onClick={fusoClick} src={fuso} />
                    <img id='front' onClick={frontClick} src={carFrontSmall} />

                    <div id='small-semi' className="small-semi-circle">

                    </div>

                </div>
                <div>
                </div>
            </div>
            {/* <div ref={ref} style={{ marginTop: '300px' }}>
                <img src={carFront} />
                <img src={fuso} />
                <img src={outlander} />
                <button onClick={() => rotate()}>Rotate</button>
            </div>
            <input type="text" onChange={(e) => setText(e.target.value)} /> */}
        </>
    )
}

export default Banner