import React from 'react'
import Button from './Button'
import Image from './Image'
import './CountdownFeatures.scss'

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} className={`countdownFeatures ${props.class ? props.class : ''}`}>
            <div className={`contentMain mainWidth mainPadding`}>
                
            </div>
        </section>
    )
}