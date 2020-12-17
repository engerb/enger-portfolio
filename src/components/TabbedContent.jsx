import React, {useState, useEffect} from 'react'
import Components from './Components'
import './TabbedContent.scss'

/**
 * Props:
    * style: optional, default 'topBar'
    * backgroundColor: optional, default 'black'
    * textColor: optional, default 'white'
    * fixed: optional, default true
    * indicator: optional, default 'tick'
    * indicatorColor: optional, default props.textColor 
    * content: optional array: {
    *   TabbedContentConfig: {
    *       title: string used for tab (should be unique to other titles!)
    *       selected: optional, default false
    *   }
    *   component: send to component router
    *   ...props
    * }
 */

export default (props) => {
    const [selectedItem, setSelectedItem] = useState(null)

    const selectItem = (name = false) => {
        for (const item of props.content) {
            if (name && item.TabbedContentConfig.title === name) {
                setSelectedItem(item)
                return
            } else if (!name && item.TabbedContentConfig.selected) {
                setSelectedItem(item)
                return
            }
        }

        // default to first
        if (props.content.length) {
            setSelectedItem(props.content[0])
        }
    }

    useEffect(() => {
        selectItem()
    }, [])

    return (
        <section id={`${props.id ? props.id : ''}`} className={`${props.className} ${props.class ? props.class : ''}`}>
            <div className={`navBar ${(props.fixed || props.fixed === undefined) && 'fixed'}`} style={{borderTop: `20px solid ${props.backgroundColor ? props.backgroundColor : 'black'}`}}>
                <div className={`filler`} style={{backgroundColor: `${props.backgroundColor ? props.backgroundColor : 'black'}`}} />
                <div className={`center`}>
                    {props.content.map((item, i) => {
                        return <div key={i} 
                            className={`navItem ${(selectedItem && item.TabbedContentConfig.title === selectedItem.TabbedContentConfig.title) && 'selected'} ${props.indicator ? props.indicator : 'tick'}`} 
                            style={{color: `${props.textColor ? props.textColor : 'white'}`, backgroundColor: `${props.backgroundColor ? props.backgroundColor : 'black'}`}}
                            onClick={()=>{
                                selectItem(item.TabbedContentConfig.title)
                                props.event(
                                    'TabbedContent', // category,
                                    'select', // action,
                                    item.TabbedContentConfig.title, // label
                                )
                            }}>
                            <h3>{item.TabbedContentConfig.title}</h3>
                        </div>
                    })}
                </div>
                <div className={`filler`} style={{backgroundColor: `${props.backgroundColor ? props.backgroundColor : 'black'}`}} />
            </div>
            {selectedItem &&
                Components(selectedItem)
            }
        </section>
    )
}