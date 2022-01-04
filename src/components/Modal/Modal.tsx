import React, { FC, ReactNode, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

type ModalProps = {
    isActive: boolean,
    setIsActive: (active: boolean) => void
    children: ReactNode
}

export const Modal: FC<ModalProps> = ({isActive, setIsActive, children}) => {

    useEffect(() => {
        const closeModalonEscape:any = (event: React.KeyboardEvent) => (
            event.key === 'Escape' ? setIsActive(false) : ''
        )

        document.addEventListener('keydown', closeModalonEscape)

        return () => document.removeEventListener('keydown', closeModalonEscape)
    }, [setIsActive])

    return (

        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={isActive}
            timeout={500}
            classNames="quiz-modal"
        >
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
