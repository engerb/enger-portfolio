import React from 'react'
import Components from './Components'
import './SplitImage.scss'

/**
 * Props:
    * topText: array() optional
    * bottomText: array() optional
    * topTextWhite
    * bottomTextWhite
    * img: .. use a real image to get real height
    * imageClass: optional, defaults to full width
    * backgroundImage: optional
    * class: optional, can be used for background image for example
    * id: optional, helpful for scrollTO
    * backgroundColor: optional
    * topColor: optional, splits at image, default is white, or main bg of page
    * bottomColor: optional, splits at image, default is white, or main bg of page
    * topColorHeight
    * bottomColorHeight
    * html: optional, just raw jsx
    * subComponent: more complex interactions
 */

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} 
            style={{backgroundImage: props.backgroundImage ? `url('${props.backgroundImage}')` : '', backgroundColor: props.backgroundColor ? props.backgroundColor : ''}} 
            className={`${props.className} ${props.class ? props.class : ''}`}>
            {props.topColor &&
                <div className={`topColor`} style={{backgroundColor: props.topColor, height: props.topColorHeight}}/>
            }
            {props.bottomColor &&
                <div className={`bottomColor`} style={{backgroundColor: props.bottomColor, height: props.bottomColorHeight}}/>
            }
            <div className={`mainWidth mainPadding`}>
                {props.topText &&
                    <div className={`text top ${props.topTextWhite && 'white'}`}>
                        {props.topText.map((text, i) => {
                            return React.createElement(text.type, {
                                children: text.props.children,
                                key: i
                            })
                        })}
                    </div>
                }
                {props.img &&
                    <img src={props.img} />
                }
                {props.html &&
                    props.html
                }
                {props.subComponent &&
                    Components(props.subComponent)
                }
                {props.bottomText &&
                    <div className={`text bottom ${props.bottomTextWhite && 'white'}`}>
                        {props.bottomText.map((text, i) => {
                            return React.createElement(text.type, {
                                children: text.props.children,
                                key: i
                            })
                        })}
                    </div>
                }
            </div>
        </section>
    )
}