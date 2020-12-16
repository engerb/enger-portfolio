import React, { useEffect, useRef, useState } from 'react'
import './CopyModal.scss'
import useStore from '../store/Store'

export default (props) => {
    const copyModal = useStore(state => state.copyModal)
    const closeCopyModal = useStore(state => state.closeCopyModal)

    const [transIn, setTransIn] = useState(false)

    const onScroll = () => {
        closeCopyModal('trans')
        window.removeEventListener('scroll', onScroll)
    }

    const [copySuccess, setCopySuccess] = useState(false)
    const textAreaRef = useRef(null)

    const copyToClipboard = (e) => {
        e.stopPropagation()
        textAreaRef.current.select()
        document.execCommand('copy')

        e.target.focus()
        setCopySuccess(true)
    }

    useEffect(() => {
        setTransIn(true)

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []) 
    
    return (
        <div className={`CopyModal ${(transIn && copyModal.open && !copyModal.closing) ? 'open' : ''}`} onClick={(e)=> {closeCopyModal('trans'), e.stopPropagation()}}>
            <div className={`modal`} onClick={(e) => {e.stopPropagation()}}>
                <textarea ref={textAreaRef} defaultValue={copyModal.text} readOnly={true}/>
                {document.queryCommandSupported('copy') &&
                    <div className={'copyButton'} onClick={copyToClipboard}>
                        {!copySuccess
                            ? <h6>Copy text </h6>
                            : <h6>Copied! ✓</h6>
                        }
                    </div>
                }
            </div>
        </div>
    )
}