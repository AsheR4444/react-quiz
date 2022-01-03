import React, { FC, useMemo } from 'react'
import { smartClass } from '../../utils'

import { ReactComponent as IconLeft } from './assets/arrow-left.svg'
import { ReactComponent as IconRight } from './assets/arrow-right.svg'

type IconedButtonProps = {
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset',
    iconType: 'prev' | 'next',
    ariaLabel: string,
}

export const IconedButton: FC<IconedButtonProps> = ({disabled, type, iconType, ariaLabel}) => {
    const currentIcon = useMemo(() => {
        switch (iconType) {
        case 'prev':
            return <IconLeft/>
            break

        case 'next':
            return <IconRight/>
            break

        default:
            return null
            break
        }
    }, [iconType])

    const currentClassName = useMemo(() => {
        return disabled ? 'cursor-not-allowed disabled:opacity-50' : 'focus:shadow-outline hover:bg-lime-700'
    }, [disabled])


    return (
        <button type={type} disabled={disabled} aria-label={ariaLabel}  className={smartClass('p-2 inline-flex items-center justify-center w-10 h-10 mr-2 text-lime-500 transition-colors duration-150 bg-lime-50 rounded-full', currentClassName)}>
            {currentIcon}
        </button>
    )
}
