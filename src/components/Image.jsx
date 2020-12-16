/**
 * Used for lazy loading, can return a real img or a background image. Give src, optional class and placeholder images too 
 */

import React, {useState, useEffect} from 'react'
import './Image.scss'

export default (props) => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = props.src
        img.onload = () => setSourceLoaded(props.src)

        return () => {
            if ( !img ) {
                return
            }
            img.onload = function(){}
        }
    }, [props.src])

    // expanding image props, optional hires src
    // optional low res
    const placeholder = props.placeholder ? props.placeholder : props.src
    
    return (
        <>
        {props.realImg
            ? <img scr={props.src} className={`${sourceLoaded ? 'loaded': ''} ${props.class ? props.class : ''}`} />
            : <div id={`${props.id ? props.id : ''}`} className={`${sourceLoaded ? 'loaded': ''} Image imgWrapper ${props.class ? props.class : ''}`} style={{...props.style}} >
                <div className={`imgChild`} style={{backgroundImage: `url(${sourceLoaded || placeholder})`}} />
            </div>
        }
        </>
    )
}