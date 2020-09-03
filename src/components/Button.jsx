import React from 'react';
import './Button.scss'

// import { Redirect } from 'react-router';
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
        <div onClick={action} className={`button ${props.style ? props.style : 'black'}`}>
            <h6>{props.text}</h6>
        </div>
    )
}