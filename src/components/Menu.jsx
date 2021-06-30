import Search from './Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
// import { FaBell} from "react-icons/fa";
// import { FaCheck} from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

// import { FaLongArrowAltRight } from "react-icons/fa";
// import { FaTimes} from "react-icons/fa";
// import { FaRegBell } from "react-icons/fa"

// import { FiMenu } from "react-icons/fa"
// import { FiMenu } from "react-icons/fa"
// import DarkModeToggle from "react-dark-mode-toggle";

const Menu = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => false); 

    

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return (  
        <div>
            <nav className='navbar'>
                <div className="nav-logo">
                    <img src="#" alt="img" />
                </div>

                <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "25px", height: "25px" }} />
            ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "25px", height: "25px" }} />
            )}</button>    

                <ul className={`menunav ${navbarOpen ? " showmenu" : ""}`}>
                    <Link to='/page' activeClassName="active-link" onClick={() => closeMenu()} exact>
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

                <div className="nav-search">
                    <Search />
                </div>

                
            </nav>
        </div>
    );
}

export default Menu;