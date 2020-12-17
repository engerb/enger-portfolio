import React, { useRef } from 'react'
import {ReactComponent as LeftArrow} from '../assets/img/leftArrow.svg'
import {ReactComponent as DownArrowLong} from '../assets/img/downArrowLong.svg'
import './ProjectHeader.scss'

import { Link } from 'react-router-dom'

export default (props) => {
    const scrollRef = useRef(null)
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToSection = (sectionID) => {
        const elem = document.getElementById(sectionID)

        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.warn('Cannot find section: #', sectionID)
        }
    }

    return (
        <section id={`${props.id ? props.id : ''}`} className={`${props.className} ${props.class ? props.class : ''}`}>
            <div className={`demoMain`}>
                <div className={`uiLayer mainWidth`}>
                    <Link to='/' className={`nav`}>
                        <LeftArrow />
                        Back to projects
                    </Link>
                    <div className={`downArrow`} onClick={()=>{ scrollToRef(scrollRef) }}>
                        <DownArrowLong />
                    </div>
                </div>
                <div className={`demo`}>
                    {props.class === 'serve' &&
                        null //import serveModelViewer npm
                    }
                </div>
            </div>
            <div ref={scrollRef} className={`textMain mainWidth mainPadding`}>
                <div className={`textMain`}>
                    <div className={`title`}>
                        {props.title}
                        {props.subTitle}
                    </div>
                    <div className={`stats`}>
                        <div className={`company`}>
                            {props.stats.role.where}
                            {props.stats.role.who}
                            {props.stats.role.when}
                        </div>
                        <div className={`links`}>
                            {props.stats.contributions.title}
                            <p>
                            {(()=>{
                                return props.stats.contributions.links.map((item, key) => {
                                    return <span key={key} onClick={()=>{
                                        scrollToSection(item.link)
                                        props.event(
                                            'ProjectHeader', // category,
                                            'scrollToSection', // action,
                                            (props.class ? props.class : '') + ': ' + item.title, // label
                                        )
                                    }}>{item.title}</span>
                                })
                            })()}
                            </p>
                        </div>
                        <div className={`skills`}>
                            {props.stats.skills.title}
                            {props.stats.skills.text}
                        </div>
                        <div className={`readingTime`}>
                            {props.stats.readingTime.title}
                            {props.stats.readingTime.text}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}