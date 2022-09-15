import React from 'react'
import styled, { ThemeProvider} from "styled-components";
import Darktheme from "./Darktheme";
import Toggle from "./Toggle";
import { Global, lightTheme, darkTheme } from "./Global";


const DarkModeToggle = () => {

    const [ theme, toggleTheme ] = Darktheme()
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    return (
        <ThemeProvider theme={ themeMode }>
                <Global />
                <Toggle theme={ theme} toggleTheme={ toggleTheme }/>
        </ThemeProvider>
    )
}

export default DarkModeToggle
