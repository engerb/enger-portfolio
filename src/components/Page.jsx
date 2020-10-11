import React, { useEffect, useState } from 'react'
import useStore from '../store/Store'
import CopyModal from './CopyModal'

export default (props) => {
    const homePageScrollY = useStore(state => state.homePageScrollY)
    const setHomePageScrollY = useStore(state => state.setHomePageScrollY)

    const copyModal = useStore(state => state.copyModal)
    const closeCopyModal = useStore(state => state.closeCopyModal)

    useEffect(() => {
        if (props.page === 'home') {
            // could be better...
            window.scrollTo(0, homePageScrollY + 200)
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
            {props.children}
        </>
    )
}