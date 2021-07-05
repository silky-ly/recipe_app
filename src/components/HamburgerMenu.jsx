import Search from './Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa";


const HamburgerMenu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (  
        <div className='nav-head'>
            <nav className='navbar'>
                <button onClick={handleToggle}>{navbarOpen ? (
                    <FaTimes style={{ color: "#fff", width: "25px", height: "25px" }} />) : (
                    <FaBars style={{ color: "#fff", width: "25px", height: "25px", transition: "1s linear", marginTop: "-5px" }} />)}
                </button>    

                <ul className={`menunav ${navbarOpen ? " showmenu" : ""}`}>
                    <Link to='/' onClick={() => closeMenu()} exact>
                        <li>Home</li>
                    </Link>

                    <Link to='/category' onClick={() => closeMenu()} exact>
                        <li>Category</li>
                    </Link>

                    <Link to='/features' onClick={() => closeMenu()} exact>
                        <li>Features</li>
                    </Link>

                    <Link to='/about' onClick={() => closeMenu()} exact>
                        <li>About Us</li>
                    </Link>
                </ul>
            </nav>

            <div className="nav-search">
                    <Search />
            </div>
        </div>
    );
}

export default HamburgerMenu;