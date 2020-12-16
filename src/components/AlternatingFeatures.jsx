import React from 'react'
import Button from './Button'
import {ReactComponent as RightArrow} from '../assets/img/rightArrow.svg'
import './AlternatingFeatures.scss'

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} className={`${props.className} ${props.class ? props.class : ''}`}>
            <div className={`contentMain mainWidth mainPadding`}>
                {props.features.map((feature, indexKey) => {
                    return <div key={indexKey} className={`demoMain ${feature.class}`}>
                        <div className={`demo`}>
                            {feature.mask && <feature.mask maskID={'mask' + indexKey} key={'mask' + indexKey} />}
                            <div className={`shadow`} style={feature.mask && {clipPath: 'url(#mask' + indexKey + ')'}} />
                            {feature.demo.img &&
                                <div className={`img`} style={Object.assign({backgroundImage: 'url(' + feature.demo.img + ')'}, feature.mask && {clipPath: 'url(#mask' + indexKey + ')'})}>
                                    {feature.demo.video && <div></div>}
                                </div>
                            }
                            {feature.demo.video && 
                                <video poster={feature.demo.img ? feature.demo.img : ''} autoPlay loop muted style={feature.mask && {clipPath: 'url(#mask' + indexKey + ')'}} playsInline>
                                    <source src={feature.demo.video} type='video/mp4' />
                                    {feature.demo.img &&
                                        <img src={feature.demo.img} />   
                                    }
                                </video>
                            }                            
                            {feature.overlayImage && <div className={`overlayImage ${feature.overlayImage.class}`} style={{backgroundImage: 'url(' + feature.overlayImage.img + ')'}} />}
                        </div>
                        <div className={`content`}>
                            <div className={`text`}>
                                {feature.title}
                                {feature.text}
                                <Button text={'View project'} style={'blue'} href={feature.href} class={'textLink'}>
                                    <RightArrow />
                                </Button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}