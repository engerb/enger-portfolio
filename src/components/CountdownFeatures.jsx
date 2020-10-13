import React, { useEffect, useState } from 'react'
import Image from './Image'
import './CountdownFeatures.scss'

export default (props) => {
    const [contentIndex, setContentIndex] = useState(0)
    const [playback, setPlayback] = useState('play') // 'pause', 'play', 'stop'
    const [contentTrans, setContentTrans] = useState('') // 'transOut', 'transIn', ''

    // const visuals = (
    //     <div>
                // loop through content images, place around all cool
                // then apply the trans class
    //     </div>
    // )

    const selectContent = (i) => {
        // when timer gets to 0, selectContent()
        // transOut
        // set timer
        // switch index
        // trans in
        // restart timer

        // if transOut, cancel timer, trans in new current
        // if stop / pause, cancel timer, trans in current

        setContentIndex(i)
    }

    // pause, play, stop
    const playbackAction = (action) => {
        setPlayback(playback)
    }

    // props.features
    useEffect(() => {
        // if (previousScreen) {
        //     setPreviousScreenTimeout( setTimeout(() => {
        //         socketSend(previousScreen)
        //     }, pinPadTimeoutMS) )
        // }

        return () => {
            // clearTimeout(previousScreenTimeout)
            // clearTimeout(checkPinTimeout)
        }
    }, [props.entryName]); 

    return (
        <section id={`${props.id ? props.id : ''}`} className={`countdownFeatures ${props.class ? props.class : ''}`}>
            <div className={`mainWidth mainPadding`}>
                <div className={`flexWrap`}>
                    <div className={`visuals`}>
                        
                    </div>
                    <div className={`textContent`}>
                        {props.title}
                        <div className={`textSlider`}>
                            {props.features.map((item, i) => {
                                return <div key={i} className={`sliderItem ${i === contentIndex ? 'active' : ''}`}
                                    onMouseEnter={() => i === contentIndex ? playbackAction('pause') : null}
                                    onMouseLeave={() => i === contentIndex ? playbackAction('resume') : null}
                                    onClick={() => {playbackAction('stop'), selectContent(i)}}>
                                    <div className={`sliderToggle ${playback}`}>
                                        {/* timer and x / + */}
                                    </div>
                                    <div className={`sliderItemContent`}>
                                        {item.title}
                                        {item.text}
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