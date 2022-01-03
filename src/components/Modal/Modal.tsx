import React, { Children, FC, ReactNode } from 'react'

import { ItemCard } from '../ItemCard'

type ModalProps = {
    isActive: boolean,
    setIsActive: (active: boolean) => void
    children: ReactNode
}

export const Modal: FC<ModalProps> = ({isActive, setIsActive, children}) => {
    return (
        <div
            className={isActive ? "quiz-modal active" : "quiz-modal"}
            onClick={() => setIsActive(false)}
        >
            <div className="quiz-modal__content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
