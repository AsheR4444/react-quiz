import React, { useState } from 'react'
import { Button } from './components/Button'

import { ItemCard } from './components/ItemCard'
import { Modal } from './components/Modal'

import './index.css'

export const App: React.FC = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <>
            <Button type="button" onClick={() => setModalActive(!modalActive)}>
                Нажми на меня!
            </Button>

            <Modal isActive={modalActive} setIsActive={() => setModalActive(!modalActive)}>
                <ItemCard
                    image={{src: 'https://dummyimage.com/720x600', alt: 'Image'}}
                    title="Сколько комнат должно быть в квартире?"
                    text='Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.'
                />
            </Modal>
        </>
    )
}
