import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Button } from './components/Button'
import { IconedButton } from './components/IconedButton'
import { ItemCard } from './components/ItemCard'
import { Modal } from './components/Modal'

import './index.css'

export const App: React.FC = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <button
                type="button"
                className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none"
                onClick={() => setModalActive(!modalActive)}
            >
                Нажми на меня!
            </button>


            <Modal isActive={modalActive} setIsActive={() => setModalActive(!modalActive)}>
                <CSSTransition in={modalActive} timeout={300} classNames="modal-quiz">
                    <ItemCard
                        image={{src: 'https://dummyimage.com/720x600', alt: 'Image'}}
                        title="Сколько комнат должно быть в квартире?"
                        text='Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.'
                    />
                </CSSTransition>
            </Modal>
        </>
    )
}
