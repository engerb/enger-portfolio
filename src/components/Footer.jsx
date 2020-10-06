import React from 'react'
// import Button from './Button'
// import Image from './Image'
import './Footer.scss'

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} className={`footer ${props.class ? props.class : ''}`}>

            <div className={`color`}>
                
                <div className={`mainWidth mainPadding contentWrap`}>
                    <div className={`col`}>
                    
                    </div>

                    <div className={`content`}>
                        {props.title}
                        {props.text.map((item, indexKey) => {
                            return <p key={indexKey}>{item.props.children}</p>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}