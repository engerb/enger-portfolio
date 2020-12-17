import React, {useState, useEffect} from 'react'
import {ReactComponent as ExpandIcon} from '../assets/img/expandIcon.svg'
import {ReactComponent as CloseModal} from '../assets/img/closeModal.svg'
import './ExpandingCards.scss'

/**
 * Props:
    * class: optional || used for additional styles
    * nested: optional || bool: true = no padding or main width margin,
    * backgroundImage: optional
    * id: optional, helpful for scrollTO
    * backgroundColor: optional
    * cards: optional || array of objects: [
        {
            title: optional || String: 'Some title',
            img: optional || path to image,
            subText: optional || String: 'Some text',
            content: optional || jsx object with content
        },
        ...
    ]
 */

export default (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalClosing, setModalClosing] = useState(false)
    const [modalCard, setModalCard] = useState(null)
    const [modalCloseTransTimeout, SetModalCloseTransTimeout] = useState(null)

    const openFixedModal = (card) => {
        if (modalOpen || modalClosing) {
            return
        }

        clearTimeout(modalCloseTransTimeout)
        setModalCard(card)
        setModalOpen(true)

        document.body.style.top = `-${window.scrollY}px`
        document.body.style.position = 'fixed'
    }

    const closeFixedModal = () => {
        clearTimeout(modalCloseTransTimeout)
        setModalClosing(true)

        setTimeout(()=>{
            setModalOpen(false)
            setModalClosing(false)
        }, 300)

        clearBody()
    }

    const clearBody = () => {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }

    useEffect(() => {

        return () => {
            clearBody()
            clearTimeout(modalCloseTransTimeout)
        }
    }, []); 

    return (
        <section id={`${props.id ? props.id : ''}`} 
            style={{backgroundImage: props.backgroundImage ? `url('${props.backgroundImage}')` : '', backgroundColor: props.backgroundColor ? props.backgroundColor : ''}} 
            className={`${props.className} ${props.class ? props.class : ''}`}>
            
            {modalOpen && 
                <div className={`contentModalMain ${modalClosing && 'closing'}`}>
                    <div className={`mainWidth`}>
                        <div className={`modalBG`} onClick={closeFixedModal} />
                        <div className={`contentModal`}>
                            <div className={`header`}>
                                <h5>{modalCard.title}</h5>
                                <CloseModal onClick={closeFixedModal} />
                            </div>
                            <div className={`contentMain`}>
                                <div className={`content`}>
                                    {modalCard.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            <div className={`${!props.nested && 'mainWidth mainPadding'} cardsMain`}>
                <div className={`cards ${(modalOpen && !modalClosing) && 'hide'}`}>
                    {props.cards && props.cards.map((card, i) => {
                        return <div key={i} className={`card ${props.class && props.class}`}>
                            {card.title && 
                                <h5>{card.title}</h5>
                            }
                            {card.img && 
                                <img src={card.img} />
                            }
                            {card.subText && 
                                <p>{card.subText}</p>
                            }
                            {card.content &&
                                <div className={`button`} onClick={()=>{
                                    openFixedModal(card)
                                    props.event(
                                        'ExpandingCards', // category,
                                        'open', // action,
                                        card.title, // label
                                    )
                                    }}>
                                    <ExpandIcon />
                                    <h6>{card.buttonTitle ? card.buttonTitle : 'Show summery'}</h6>
                                </div>
                            }
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}