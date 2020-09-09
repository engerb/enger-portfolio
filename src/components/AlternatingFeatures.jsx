import React from 'react';
import Button from './Button'
// import {ReactComponent as LeftArrow} from '../assets/img/leftArrow.svg';
import {ReactComponent as RightArrow} from '../assets/img/rightArrow.svg';
// import {ReactComponent as DownArrowLong} from '../assets/img/downArrowLong.svg';
import './AlternatingFeatures.scss'

import { Link } from 'react-router-dom';

export default (props) => {
    // const refs = useRef();
    // refs.current = [];

    // const addToRefs = el => {
    //     if (el && !refs.current.includes(el)) {
    //         refs.current.push(el);
    //     }
    // };

    return (
        <section id={`${props.id ? props.id : ''}`} className={`AlternatingFeatures ${props.class ? props.class : ''}`}>
            <div className={`contentMain mainWidth mainPadding`}>
                {props.features.map((feature, indexKey) => {
                    return <div key={indexKey} className={`demoMain ${feature.class}`} style={{minHeight: feature.demo.height}}>
                        <div className={`demo`} style={{width: feature.demo.width, height: feature.demo.height}}>
                            {feature.overlayImage && <div className={`overlayImage ${feature.overlayImage.class}`} style={{backgroundImage: 'url(' + feature.overlayImage.img + ')'}} />}
                            {feature.mask && <feature.mask askID={'mask' + indexKey} key={'mask' + indexKey} />}
                            <div className={`shadow`} style={{width: feature.demo.width, height: feature.demo.height, borderRadius: feature.demo.radius, clipPath: 'url(#mask' + indexKey + ')'}} />
                            <div className={`img`} style={{width: feature.demo.width, height: feature.demo.height, backgroundImage: 'url(' + feature.demo.img + ')', borderRadius: feature.demo.radius, clipPath: 'url(#mask' + indexKey + ')'}}>
                                {feature.demo.video && <div></div>}
                            </div>
                        </div>
                        <div className={`content`} style={{minHeight: feature.demo.height}}>
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