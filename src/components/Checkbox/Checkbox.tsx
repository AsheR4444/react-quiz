import React, { FC, useState } from 'react'

type CheckboxProps = {
    text: string,
    checked?: boolean,
    onClick?: () => void,
}

export const Checkbox: FC<CheckboxProps> = ({text, checked, onClick}) => {
    return (
        <div className="form-check">
            <label
                className="form-check-label inline-block text-gray-800"
                aria-label={text}
            >
                {text}

                <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    defaultChecked={checked}
                />
            </label>
        </div>
    )
}
