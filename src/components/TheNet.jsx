import React, { useEffect } from 'react'
import './TheNet.scss'

/**
 * Props:
    * Don't forget your netiquette! 
    * pw: BER5348833
 */

export default (props) => {
    useEffect(() => {
        const audioEl = document.getElementsByClassName('audio-element')[0]
        audioEl.play()
    }, [])

    return (
        <section className={`TheNet`}>
            <audio className={`audio-element`}>
                <source src={require('../assets/sound/theNet.mp3').default}></source>
            </audio>
        </section>
    )
}