import React from 'react'
import { useHistory } from 'react-router-dom'
import useStore from '../store/Store'
import './Button.scss'


export default (props) => {
    const setCopyModal = useStore(state => state.setCopyModal)
    const page = useStore(state => state.page)

    const history = useHistory()
    const action = () => {
        if (props.event) {
            props.event(
                'Button', // category,
                props.action ? props.action : 'linkInternal', // action,
                props.text, // label
            )
        }

        if (props.action === 'scrollTo') {
            const elem = document.getElementById(props.href);

            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' })
            } else {
                console.warn('Cannot find section: #', sectionID)
            }

        } else if (props.action === 'linkExternal') {
            window.open(props.href, props.target)

        } else if (props.action === 'textCopyModal') {
            setCopyModal( props.copy() )
        
        // 'linkInternal' catch all
        } else { 
            if (props.href) {
                history.push(props.href)
            } else {
                console.warn('Could not handle button action, props: ', props)
            }
        }
    }
    
    return (
        <div id={`${props.id ? props.id : ''}`} onClick={action} className={`Button ${props.style ? props.style : 'black'} ${props.class ? props.class : ''}`}>
            <div className={`buttonContent ${props.back && 'reverse'}`}>
                <h6>{props.text}</h6>
                {props.children && props.children}
                {props.iconImg &&
                    <div className={props.iconImg.class} style={{backgroundImage: `url(${props.iconImg.image})`}} />
                }
            </div>
        </div>
    )
}