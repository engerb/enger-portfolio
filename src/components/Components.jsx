import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SplitImage from './SplitImage'
import ProjectIntro from './ProjectIntro'
import ProjectHeader from './ProjectHeader'
import ProjectFooter from './ProjectFooter'
import TabbedContent from './TabbedContent'
import ExpandingCards from './ExpandingCards'
import AccordionFeatures from './AccordionFeatures'
import AlternatingContent from './AlternatingContent'
import AlternatingFeatures from './AlternatingFeatures'

const Components = {
    Header,
    Footer,
    SplitImage,
    ProjectIntro,
    ProjectHeader,
    ProjectFooter,
    TabbedContent,
    ExpandingCards,
    AccordionFeatures,
    AlternatingContent,
    AlternatingFeatures,
}

export default (item, indexKey) => {   
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