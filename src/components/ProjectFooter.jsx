import React from 'react'
import Button from './Button'
import {ReactComponent as LeftArrow} from '../assets/img/leftArrow.svg'
import './ProjectFooter.scss'

/**
 * Props:
    * text: Probably an array
    * textWidth: optional, max width of text container, default is '900px'
    * class: usually for 'fullHeight' style
    * backgroundImg: optional, will default be full height and repeat-x
    * backgroundColor: optional, default is white / none
    * textColor: optional, default is black. Provided to button
    * collage: optional array: {
    *   video: optional
    *   img: optional, when video, used as background placeholder
    *   top: optional
    *   left: optional
    *   bottom: optional
    *   right: optional
    * }
 */

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} 
            style={{backgroundImage: props.backgroundImage ? `url('${props.backgroundImage}')` : '', backgroundColor: props.backgroundColor ? props.backgroundColor : ''}} 
            className={`${props.className} ${props.class ? props.class : ''}`}>
            {props.collage &&
                <div className={`collage`}>
                    {props.collage.map((item, i) => {
                        if (item.video) {
                            return <video key={i} poster={item.img ? item.img : ''} autoPlay loop muted style={{width: item.width, top: item.top, left: item.left, bottom: item.bottom, right: item.right}} playsInline>
                                <source src={item.video} type='video/mp4' />
                                {item.img &&
                                    <img src={item.img} />   
                                }
                            </video>
                        } else if (item.img) {
                            return <img src={item.img} key={i} style={{width: item.width, top: item.top, left: item.left, bottom: item.bottom, right: item.right}} /> 
                        }
                    })}
                </div>
            }
            <div className={`mainWidth mainPadding`}>
                {props.text &&
                    <div className={`text ${props.textColor && props.textColor}`} style={{maxWidth: `${props.textWidth ? props.textWidth : '900px'}`, color: `${props.textColor ? props.textColor : ''}`}}>
                        {props.text.map((text, i) => {
                            return React.createElement(text.type, {
                                children: text.props.children,
                                key: i
                            })
                        })}
                    </div>
                }
                <Button text={'Back to projects'} style={props.textColor} href={'/'} back>
                    <LeftArrow />
                </Button>
            </div>
        </section>
    )
}