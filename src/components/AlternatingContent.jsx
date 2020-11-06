import React from 'react'
import Image from './Image'
import './AlternatingContent.scss'

/**
 * Props:
    * topText: array() optional
    * bottomText: array() optional
    * class: optional
    * textClass: optional
    * id: optional, helpful for scrollTO
    * backgroundColor: optional
    * startReversed: optional, bool
    * alternatingContent: array[
        * { // item (starts with text on left)
            * text: array()
            * content: {
                * image: optional
                * video: optional, src
                * videoImg: optional, only for video
                * width: optional, percent, default is '50%'.
                * class: optional, can help hang it out of the container 
            * }
        * }   
    * ]
 */

export default (props) => {
    return (
        <section id={`${props.id ? props.id : ''}`} style={{backgroundColor: props.backgroundColor ? props.backgroundColor : ''}} className={`${props.className} ${props.class ? props.class : ''}`}>
            <div className={`mainWidth mainPadding`}>
                {props.topText &&
                    <div className={`topText`}>
                        {props.topText.map((text, i) => {
                            return React.createElement(text.type, {
                                children: text.props.children,
                                className: props.textClass ? props.textClass : '',
                                key: i
                            })
                        })}
                    </div>
                }
                {props.alternatingContent &&
                    <div className={`alternatingContent ${props.startReversed ? 'reversed' : ''}`}>
                        {props.alternatingContent.map((item, i) => {
                            return <div key={i} className={`item`}>
                                <div className={`text`}>
                                    {item.text.map((text, ii) => {
                                        return React.createElement(text.type, {
                                            children: text.props.children,
                                            className: props.textClass ? props.textClass : '',
                                            key: ii
                                        })
                                    })}
                                </div>
                                <div className={`content`} style={{flexBasis: item.content.width ? item.content.width : '50%'}}>
                                    {item.content.image &&
                                        <img className={`${item.content.class ? item.content.class : ''}`} />
                                    }
                                    {item.content.video &&
                                        <video poster={item.content.videoImg ? item.content.videoImg : ''} className={`${item.content.class ? item.content.class : ''}`} autoPlay loop muted>
                                            <source src={item.content.video} type='video/mp4' />
                                            {item.content.videoImg &&
                                                <img src={item.content.videoImg} />   
                                            }
                                        </video>
                                    }
                                </div>
                            </div>
                        })}
                    </div>
                }
                {props.bottomText &&
                    <div className={`bottomText`}>
                        {props.bottomText.map((text, i) => {
                            return React.createElement(text.type, {
                                children: text.props.children,
                                className: props.textClass ? props.textClass : '',
                                key: i
                            })
                        })}
                    </div>
                }
            </div>
        </section>
    )
}