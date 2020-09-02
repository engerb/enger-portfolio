import React from 'react';
import {ReactComponent as LeftArrow} from '../assets/img/leftArrow.svg';
import {ReactComponent as DownArrowLong} from '../assets/img/downArrowLong.svg';
import './ProjectHeader.scss'

import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <section className={`ProjectHeader ${props.class}`}>
            <div className={`demoMain`}>
                <div className={`uiLayer mainWidth`}>
                    <Link to='/' className={`nav`}>
                        <LeftArrow />
                        Back to projects
                    </Link>
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
                                    return <span key={key} onClick={()=>{console.log(item.link)}}>{item.title}</span>
                                    // return <Link to={`#${item.link}`} key={key}>{item.title}</Link>
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