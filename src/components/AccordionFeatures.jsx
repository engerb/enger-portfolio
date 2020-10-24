import React, { useState } from 'react'
import {ReactComponent as CountDownIcon} from '../assets/img/countDownIcon.svg'
import {ReactComponent as CountDownBG} from '../assets/img/countDownBG.svg'
import {ReactComponent as CountDownOutline} from '../assets/img/countDownOutline.svg'
import Image from './Image'
import './AccordionFeatures.scss'

export default (props) => {
    const [contentIndex, setContentIndex] = useState(0)

    return (
        <section id={`${props.id ? props.id : ''}`} className={`accordionFeatures ${props.class ? props.class : ''}`}>
            <div className={`mainWidth mainPadding`}>
                <div className={`flexWrap`}>
                    <div className={`visuals`}>
                        {props.features[contentIndex].visuals.map((img, i) => {
                            return <Image key={`${contentIndex}-${i}`} class={`img ${i}`} src={img} style={{transitionDelay: `${i * 150}ms`}} />
                        })}
                    </div>
                    <div className={`textContent`}>
                        {props.title}
                        <div className={`textSlider`}>
                            {props.features.map((item, i) => {
                                return <div key={i} className={`sliderItem ${i === contentIndex ? 'active' : ''}`} onClick={() => {setContentIndex(i)}}>
                                    <div className={`sliderToggle`}>
                                        <CountDownBG className={`BG`} />
                                        <CountDownOutline className={`Outline`} />
                                        <CountDownIcon className={`icon`}  />
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