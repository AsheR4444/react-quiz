import React, { FC } from 'react'

type ButtonProps = {
    children: React.ReactNode,
    type: "button",
    disabled?: boolean,
    onClick: () => void
}

export const Button: FC<ButtonProps> = ({children, type, disabled, onClick}) => (
    <button
        type={type}
        disabled={disabled}
        className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none"
        onClick={onClick}
    >
        {children}
    </button>
)
