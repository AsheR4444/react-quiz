import React from 'react'

import { Button } from './components/Button'
import { IconedButton } from './components/IconedButton'

import './index.css'

export const App: React.FC = () => {
    return (
        <>
            <Button disabled type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Нажми на меня!
            </Button>
            <IconedButton ariaLabel="Предыдущая карточка" iconType="prev" />
            <IconedButton ariaLabel="Следующая карточка" iconType="next"  />
        </>
    )
}
