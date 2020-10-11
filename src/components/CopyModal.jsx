import React, { useEffect, useState } from 'react'
import './CopyModal.scss'
import useStore from '../store/Store'

export default (props) => {
    const homePageScrollY = useStore(state => state.homePageScrollY)
    const setHomePageScrollY = useStore(state => state.setHomePageScrollY)

    const copyModal = useStore(state => state.copyModal)
    const closeCopyModal = useStore(state => state.closeCopyModal)

    const [transIn, setTransIn] = useState(false)

    const onScroll = () => {
        closeCopyModal('trans')
        window.removeEventListener('scroll', onScroll)
    }

    useEffect(() => {
        setTransIn(true)

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []); 
    
    return (
        <div className={`copyModal ${(transIn && copyModal.open && !copyModal.closing) ? 'open' : ''}`} onClick={()=> closeCopyModal('trans')}>
            <div className={``}>
                
            </div>
        </div>
    )
}