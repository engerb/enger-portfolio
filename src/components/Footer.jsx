import React from 'react'
import Button from './Button'
import Image from './Image'
import './Footer.scss'

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} className={`${props.className} ${props.class ? props.class : ''}`}>

            <div className={`color`}>
                <div className={`bgLayers`}>
                    {props.bgLayers.map((item, indexKey) => {
                        return <div key={indexKey} className={`bgLayer`} style={{backgroundImage: `url(${item})`, animationDelay: `${indexKey * 3000}ms`}}/>
                    })}
                </div>

                <div className={`mainWidth mainPadding contentWrap`}>
                    <div className={`col`}>
                        <div className={`offset`}>
                            <Image class={`headshot`} src={props.headshot} />
                            <div className={`links`}>
                                {props.social.map((item, indexKey) => {
                                    return <a key={indexKey} target='_blank' href={item.href} style={{backgroundImage: `url(${item.image})`}} 
                                    onClick={()=>{
                                        props.event(
                                            'Footer', // category,
                                            'socialLink', // action,
                                            item.alt, // label
                                        )
                                    }}></a>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`content`}>
                        <div className={`text`}>
                            {props.title}
                            {props.text.map((item, indexKey) => {
                                return <p key={indexKey}>{item.props.children}</p>
                            })}
                        </div>
                        <div className={`buttons`}>
                            {props.buttons.map((item, indexKey) => {
                                return <Button event={props.event} key={indexKey} {...item} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}