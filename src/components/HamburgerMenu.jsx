import Search from './Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines, FaTimes} from "react-icons/fa";
// import DarkModeToggle from "react-dark-mode-toggle";

const HamburgerMenu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    // const [darkMode, setDarkMode] = useState('light'); 

    // const toggleTheme = () => {
    //     if (darkMode === 'light') {
    //       setTheme('dark');
    //     } else {
    //       setDarkMode('light');
    //     }
    // }

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (  
        <nav className='navbar'>
            <button onClick={handleToggle}>{navbarOpen ? (
            <FaTimes style={{ color: "#fff", width: "25px", height: "25px" }} />
        ) : (
            <FaGripLines style={{ color: "#7b7b7b", width: "25px", height: "25px", transition: "1s ease" }} />
        )}</button>    

            <ul className={`menunav ${navbarOpen ? " showmenu" : ""}`}>
                <Link to='/homepage' activeClassName="active-link" onClick={() => closeMenu()} exact>
                    <li>Home</li>
                </Link>

                <Link to='/category' activeClassName="active-link" onClick={() => closeMenu()} exact>
                    <li>Category</li>
                </Link>

                <Link to='/contact' activeClassName="active-link" onClick={() => closeMenu()} exact>
                    <li>Features</li>
                </Link>

                <Link to='/about' activeClassName="active-link" onClick={() => closeMenu()} exact>
                    <li>About Us</li>
                </Link>
            </ul>

            {/* <ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
                <>
                <GlobalStyles />
                    <DarkModeToggle
                    className="theme-btn"
                    onChange={toggleTheme}
                    checked={toggleTheme}
                    size={50}
                    />
                </>
            </ThemeProvider> */}

            <div className="nav-search">
                <Search />
            </div>
        </nav>
    );
}

export default HamburgerMenu;