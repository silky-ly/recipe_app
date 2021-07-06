import React from 'react'
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import styled from 'styled-components'


const Toggle = ({ theme, toggleTheme }) => {

    return (
        <div onClick={ toggleTheme } className="mode">
        { theme === 'light' ? <FaRegMoon style={{color: "black"}}/> : <FaRegSun style={{color: "white",}}/>}
        </div>
    )
}

export default Toggle
