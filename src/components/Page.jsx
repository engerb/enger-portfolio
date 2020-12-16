import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useStore from '../store/Store'
import CopyModal from './CopyModal'
import {ReactComponent as Pi} from '../assets/img/pi.svg'

export default (props) => {
    const homePageScrollY = useStore(state => state.homePageScrollY)
    const setHomePageScrollY = useStore(state => state.setHomePageScrollY)

    const copyModal = useStore(state => state.copyModal)
    const closeCopyModal = useStore(state => state.closeCopyModal)

    const history = useHistory()
    const [ctrlShift, setCtrlShift] = useState(false)

    const keyPress = (e) => {
        if ((e.ctrlKey || e.altKey || e.metaKey) && (e.key === 'Shift')) {
            setCtrlShift(true)
        } else {
            setCtrlShift(false)
        }
    }

    const checkIfCanEnterTheNet = () => {
        if (ctrlShift) {
            history.push('/the-net')
        }
    }

    useEffect(() => {
        props.analytics(window.location)

        // fix for github hosting
        if (window.location.hash) {
            const newPath = window.location.hash.replace('#', '')
            history.push(newPath)
        } else if (window.location.search) {
            const newPath = window.location.search.replace('?', '')
            history.push(newPath)
        }

        console.clear()

        if (props.page === 'home') {
            window.scrollTo(0, homePageScrollY ? homePageScrollY : 0)
        } else {
            window.scrollTo(0, 0)
        }

        document.addEventListener('keydown', keyPress)

        return () => {
            closeCopyModal()
            document.removeEventListener('keydown', keyPress)
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
            <div className={`pi ${props.page}`} onClick={checkIfCanEnterTheNet}>
                <Pi />
            </div>
            {props.children}
        </>
    )
}