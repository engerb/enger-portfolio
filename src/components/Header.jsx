import React from 'react'
import Button from './Button'
import Image from './Image'
import './Header.scss'

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} className={`heroWrap mainWidth mainPadding ${props.class ? props.class : ''}`}>
            <div className={`hero`}>
                <div className={`text mainPadding`}>
                    {props.subTitle}
                    {props.title}
                    <Button {...props.button} />
                </div>
                <div className={`images`}>
                    <Image class={`img1`} src={props.img1} />
                    <Image class={`img2`} src={props.img2} />
                    <Image class={`img3`} src={props.img3} />
                </div>
            </div>
        </section>
    )
}