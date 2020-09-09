/**
 * Used for lazy loading, can return a real img or a background image. Give src, optional class and placeholder images too 
 */

import React, {useState, useEffect} from 'react';

export default (props) => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = props.src
        img.onload = () => setSourceLoaded(props.src)
    }, [props.src])

    // expanding image props, optional hires src
    // optional low res
    const placeholder = props.placeholder 
    
    return (
        // (()=>{props.realImg ?
            // <img /> :
            <div id={`${props.id ? props.id : ''}`} className={`${sourceLoaded ? 'loaded': ''} ${props.class ? props.class : ''}`} style={{backgroundImage: `url(${sourceLoaded || placeholder})`}} />
        // })()
    )
}