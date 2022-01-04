import React, { useState } from 'react'
import { Button } from './components/Button'

import { ItemCard } from './components/ItemCard'
import { Modal } from './components/Modal'

import './assets/index.css'

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
                />
            </Modal>
        </>
    )
}
