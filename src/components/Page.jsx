import React, { useEffect } from 'react'
import useStore from '../store/Store'
import CopyModal from './CopyModal'

export default (props) => {
    const homePageScrollY = useStore(state => state.homePageScrollY)
    const setHomePageScrollY = useStore(state => state.setHomePageScrollY)

    const copyModal = useStore(state => state.copyModal)
    const closeCopyModal = useStore(state => state.closeCopyModal)

    useEffect(() => {
        props.analytics(window.location)

        if (props.page === 'home') {
            // could be better...
            window.scrollTo(0, homePageScrollY ? homePageScrollY : 0)
        } else {
            window.scrollTo(0, 0)
        }

        return () => {
            closeCopyModal()
            if (props.page === 'home') {
                setHomePageScrollY( window.scrollY )
            } 
        }
    }, [props.page]); 
    
    return (
        <>
            {copyModal.open &&
                <CopyModal />
            }
            {/* <p className={`legalStuff`}>All images and concepts shown are my work, and/or work that is within the public. Otherwise, are generalized and simulated to protect privacy and/or intellectual property.</p> */}
            {props.children}
        </>
    )
}