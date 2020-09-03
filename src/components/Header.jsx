import React from 'react';
import Button from './Button'
import './Header.scss'

export default (props) => {
    return (
        <section className={`heroWrap mainWidth mainPadding`}>
            <div className={`hero`}>
                <div className={`text mainPadding`}>
                    {props.subTitle}
                    {props.title}
                    <Button {...props.button} />
                </div>
                <div className={`images`}>
                    <div className={`img1`} style={{backgroundImage: `url(${props.img1})`}} />
                    <div className={`img2`} style={{backgroundImage: `url(${props.img2})`}} />
                    <div className={`img3`} style={{backgroundImage: `url(${props.img3})`}} />
                </div>
            </div>
        </section>
    )
}