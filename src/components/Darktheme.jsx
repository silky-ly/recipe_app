import React from 'react'
import { useState } from 'react'

const Darktheme = () => {

    const [ theme, setTheme ] = useState('light')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    

    return  [ theme, toggleTheme ]
}

export default Darktheme
