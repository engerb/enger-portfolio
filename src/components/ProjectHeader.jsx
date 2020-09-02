import React from 'react';
import {ReactComponent as LeftArrow} from '../assets/img/leftArrow.svg';
import {ReactComponent as DownArrowLong} from '../assets/img/downArrowLong.svg';
import './ProjectHeader.scss'

export default (props) => {
    return (
        <section className={`ProjectHeader ${props.class}`}>
            <div className={`demoMain`}>
                <div className={`uiLayer mainWidth`}>
                    <a className={`nav`} href={`/`}>
                        <LeftArrow />
                        Back to projects
                    </a>
                    <div className={`downArrow`}>
                        <DownArrowLong />
                    </div>
                </div>
                <div className={`demo`}>
                    {props.class === 'serve' &&
                        null //import serveModelViewer npm
                    }
                    {props.class === 'wiivv' &&
                        null //wiivv stuff
                    }
                </div>
            </div>
            <div className={`textMain mainWidth mainPadding`}>
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
                                    return <span key={key} onClick={()=>{}} data={item.link}>{item.title}</span>
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