import React, { FC } from 'react'

type ButtonProps = {
    children: React.ReactNode,
    type: "button",
    disabled?: boolean,
    className?: string
}

export const Button: FC<ButtonProps> = ({children, type, disabled, className}) => {
    let currentComponent = null

    switch (disabled) {
    case true:
        currentComponent = (
            <button type={type} disabled className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                {children}
            </button>
        )
        break

    default:
        currentComponent = (
            <button type={type} className={className}>
                {children}
            </button>
        )
        break
    }


    return (currentComponent)
}
