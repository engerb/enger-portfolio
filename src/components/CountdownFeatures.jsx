import React, { useEffect, useState } from 'react'
import {ReactComponent as CountDownIcon} from '../assets/img/countDownIcon.svg'
import {ReactComponent as CountDownBG} from '../assets/img/countDownBG.svg'
import {ReactComponent as CountDownOutline} from '../assets/img/countDownOutline.svg'
import {ReactComponent as CountDownTimer} from '../assets/img/countDownTimer.svg'
import Image from './Image'
import './CountdownFeatures.scss'

export default (props) => {
    const [contentIndex, setContentIndex] = useState(0)
    const [playback, setPlayback] = useState('play') // 'pause', 'play', 'stop'
    const [contentTrans, setContentTrans] = useState('transIn') // 'transOut', 'transIn', ''
    // // const [transTimeoutMS, setTransTimeoutMS] = useState(null)

    // // const [transCountdownMS, setTransCountdownMS] = useState(5) // 300
    // const [myInterval, setMyInterval] = useState(null)
    // const timeoutMS = 2000;
    // const [transTimeout, setTransTimeout] = useState(null)
    // const transMS = 300;

    // // const visuals = (
    // //     <div>
    //             // loop through content images, place around all cool
    //             // then apply the trans class
    // //     </div>
    // // )

    const selectContent = (i) => {
        // clearTimeout( transTimeout )
        // // clearInterval( myInterval )
        // clearTimeout( myInterval )
        // setContentTrans( 'transOut' )

        // setTransTimeout( setTimeout(() => {
        //     setContentIndex(i)
        //     setContentTrans( 'transIn' )

        //     if (playback === 'play') {
        //         startInterval()
        //     }
        // }, transMS) )
        // when timer gets to 0, selectContent()
        // transOut
        // set timer
        // switch index
        // setContentIndex( prevActiveStep => (prevActiveStep + 1) % props.features.length)
        // setContentIndex( i )
        // trans in
        // restart timer

        // if transOut, cancel timer, trans in new current
        // if stop / pause, cancel timer, trans in current

        setContentIndex(i)
    }

    // const startInterval = ()=> {
    //     // setMyInterval( setInterval(() => {
    //     setMyInterval( setTimeout(() => {
    //         selectContent(contentIndex => (contentIndex + 1) % props.features.length)
    //     }, timeoutMS) )
    // }

    // // pause, play, stop
    const playbackAction = (action) => {
        setPlayback(action)

    //     if (action === 'stop' || action === 'pause') {
    //         clearTimeout( transTimeout )
    //         // clearInterval( myInterval )
    //         clearTimeout( myInterval )
    //         setContentTrans( 'transIn' )
    //     } else {
    //         startInterval()
    //     }
    }

    // useEffect(() => {
    //     // const countdownStart = 5;

    //     startInterval()

    //     // setMyTimeout( setTimeout(() => {
    //     //     setContentIndex((contentIndex + 1) % props.features.length)
    //     // }, timeoutMS) )

    //     return () => {
    //         clearTimeout( transTimeout )
    //         clearTimeout( myInterval )
    //         // clearInterval( myInterval )
    //     }
    // }, []); 

    return (
        <section id={`${props.id ? props.id : ''}`} className={`countdownFeatures ${props.class ? props.class : ''}`}>
            <div className={`mainWidth mainPadding`}>
                <div className={`flexWrap`}>
                    <div className={`visuals ${contentTrans}`}>
                        {props.features[contentIndex].visuals.map((img, i) => {
                            return <Image key={`${contentIndex}-${i}`} class={`img ${i}`} src={img} style={{transitionDelay: `${i * 150}ms`}} />
                        })}
                    </div>
                    <div className={`textContent`}>
                        {props.title}
                        <div className={`textSlider`}>
                            {props.features.map((item, i) => {
                                return <div key={i} className={`sliderItem ${i === contentIndex ? 'active' : ''}`}
                                    onMouseEnter={() => {i === contentIndex ? playbackAction('pause') : null}}
                                    onMouseLeave={() => {i === contentIndex ? playbackAction('play') : null}}
                                    onClick={() => {playbackAction('stop'), selectContent(i)}}>
                                    <div className={`sliderToggle ${playback}`}>
                                        {/* timer and x / + */}
                                        {/* <div className={`icon`} /> */}
                                        <CountDownBG className={`BG`} />
                                        <CountDownOutline className={`Outline`} />
                                        <CountDownIcon className={`icon`}  />
                                        {/* <CountDownTimer className={`Timer`} /> */}
                                    </div>
                                    <div className={`sliderItemContent`}>
                                        {item.title}
                                        <div className={`overflowWrap`}>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}