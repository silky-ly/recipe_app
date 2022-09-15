import Search from './Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// import DarkModeToggle from './DarkModeToggle';

const HamburgerMenu = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(prev => !prev);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<div className="nav-head">
			{/* <DarkModeToggle /> */}
			<nav className="navbar">
				{/* <button onClick={handleToggle}>{navbarOpen ? (
                    <FaTimes style={{ color: "#fff", width: "25px", height: "25px" }} className='close'/>) : (
                        <FaBars style={{ color: "#212529", width: "25px", height: "25px", transition: "1s linear", marginTop: "-5px" }} className='open' />)}
                </button>     */}

				<Link to="/homepage" onClick={() => closeMenu()} exact>
                    <h3 className="logo">Awesomely</h3>
				</Link>

				{/* <ul className={`menunav ${navbarOpen ? " showmenu" : ""}`}> */}
				<ul className="showmenu">
					<Link to="/homepage" onClick={() => closeMenu()} exact>
						<li>Home</li>
					</Link>

					<Link to="/category" onClick={() => closeMenu()} exact>
						<li>Category</li>
					</Link>

					<Link to="/features" onClick={() => closeMenu()} exact>
						<li>Gallery</li>
					</Link>

					<Link to="/about" onClick={() => closeMenu()} exact>
						<li>About</li>
					</Link>

					<Link to="/reg">
						<li className="menu-signup-btn">SIGN UP</li>
					</Link>

					<Link to="/login">
						<li className="menu-signup-btn">SIGN IN</li>
					</Link>
				</ul>

				<div className="nav-search">
					<Search />
				</div>
			</nav>
		</div>
	);
};

export default HamburgerMenu;
