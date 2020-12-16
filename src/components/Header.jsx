import React from 'react'
import Button from './Button'
import Image from './Image'
import './Header.scss'

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} className={`mainWidth mainPadding ${props.className} ${props.class ? props.class : ''}`}>
            <div className={`hero`}>
                <div className={`text mainPadding`}>
                    {props.subTitle}
                    {props.title}
                    <Button {...props.button} />
                </div>
                <div className={`images`}>
                    {props.img.map((img, i) => {
                        return <Image class={`img${i + 1}`} key={i} src={img} />
                    })}
                </div>
            </div>
        </section>
    )
}