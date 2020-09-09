import React from 'react';
import './Button.scss'

import { useHistory } from 'react-router-dom';

export default (props) => {
    const history = useHistory();
    const action = () => {
        if (props.action === 'scrollTo') {

        } else if (props.action === 'linkExternal') {

        } else { 
            // 'linkInternal' catch all
            if (props.href) {
                history.push(props.href);
            } else {
                console.warn('Could not handle button action, props: ', props)
            }
        }
    }
    
    return (
        <div id={`${props.id ? props.id : ''}`} onClick={action} className={`button ${props.style ? props.style : 'black'} ${props.class ? props.class : ''}`}>
            <div>
                <h6>{props.text}</h6>
                {props.children && props.children}
            </div>
        </div>
    )
}