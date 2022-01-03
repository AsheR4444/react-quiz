import React, { useState, FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

import { ItemCard } from '../ItemCard'

type ModalProps = {
    isActive: boolean,
    setIsActive: (active: boolean) => void
    children: ReactNode
}

export const Modal: FC<ModalProps> = ({isActive, setIsActive, children}) => {
    return (
        <CSSTransition mountOnEnter unmountOnExit in={isActive} timeout={500} classNames="quiz-modal" >
            <div className="quiz-modal">
                <div
                    className="quiz-modal-container"
                    onClick={() => setIsActive(false)}
                />

                <div className="quiz-modal__content">
                    {children}
                </div>
            </div>
        </CSSTransition>
    )
}
