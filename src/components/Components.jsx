import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProjectIntro from './ProjectIntro'
import ProjectHeader from './ProjectHeader'
import AccordionFeatures from './AccordionFeatures'
import AlternatingFeatures from './AlternatingFeatures'

const Components = {
    Header: Header,
    Footer: Footer,
    ProjectIntro: ProjectIntro,
    ProjectHeader: ProjectHeader,
    AccordionFeatures: AccordionFeatures,
    AlternatingFeatures: AlternatingFeatures,
}

export default (item, indexKey) => {   
    // component does exist
    if (typeof Components[item.component] !== 'undefined') {
        return React.createElement(Components[item.component], {
            key: (item.key ? item.key : indexKey),
            className: item.component,
            ...item
        })
    } else {
        return React.createElement(
            () => <div>The component {item.component} has not been created yet.</div>,
            { key: (item.key ? item.key : indexKey) }
        )
    }
}