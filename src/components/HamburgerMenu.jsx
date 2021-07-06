import Search from './Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa";
// import DarkModeToggle from './DarkModeToggle';


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
                {/* <DarkModeToggle /> */}
            <nav className='navbar'>
                <button onClick={handleToggle}>{navbarOpen ? (
                    <FaTimes style={{ color: "#fff", width: "25px", height: "25px" }} className='close'/>) : (
                        <FaBars style={{ color: "#70e000", width: "25px", height: "25px", transition: "1s linear", marginTop: "-5px" }} className='open' />)}
                </button>    


                <ul className={`menunav ${navbarOpen ? " showmenu" : ""}`}>
                    <Link to='/homepage' onClick={() => closeMenu()} exact>
                        <li>Home</li>
                    </Link>

                    <Link to='/category' onClick={() => closeMenu()} exact>
                        <li>Category</li>
                    </Link>

                    <Link to='/features' onClick={() => closeMenu()} exact>
                        <li>Gallery</li>
                    </Link>

                    <Link to='/about' onClick={() => closeMenu()} exact>
                        <li>About Us</li>
                    </Link>

                    <Link to='/reg'>
                           <li><a className="menu-signup-btn">SIGN UP</a></li>
                        </Link>

                    <Link to='/login'>
                            <li><a className="menu-signin-btn">SIGN IN</a></li> 
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