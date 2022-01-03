import React from 'react'

import { IconedButton } from '../IconedButton'


export const ArrowNav = () => {
    return (
        <div className="flex w-full justify-end">
            <IconedButton ariaLabel="Предыдущая карточка" iconType="prev" />
            <IconedButton ariaLabel="Следующая карточка" iconType="next"  />
        </div>
    )
}
