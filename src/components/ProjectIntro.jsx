import React from 'react'
import Image from './Image'
import './ProjectIntro.scss'

/**
 * Props:
    * title: <h2>...</h2>
    * description: <p>...</p>
    * goals: Array( strings ), used to create an unordered list
    * img: optional, changes changes layout, tall boi!
 */

export default (props) => {

    return (
        <section id={`${props.id ? props.id : ''}`} className={`${props.className} ${props.class ? props.class : ''}`}>
            <div className={`mainWidth mainPadding ${props.img && 'imgLayout'}`}>
                <div className={`text`}>
                    <div className={`description`}>
                        {props.title}
                        {props.description}
                    </div>
                    <div className={`goals`}>
                        <h3>Product goals</h3>
                        <ul>
                            {props.goals.map((li, i) => {
                                return <li key={i}>{li}</li>
                            })}
                        </ul>
                    </div>
                </div>
                {props.img &&
                    <Image src={props.img} />
                }
            </div>
        </section>
    )
}