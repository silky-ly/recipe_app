import Search from './Search';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (  
        <nav>
            <div className="nav-logo">
                <img src="#" alt="" />
            </div>

            <div className="nav-search">
                <Search />
            </div>

            <ul className='menu-links'>
                <Link to='/home'>
                    <li>Home</li>
                </Link>

                <Link to='/category'>
                    <li>Category</li>
                </Link>

                <Link to='/contact'>
                    <li>Contact Us</li>
                </Link>

                <Link to='/about'>
                    <li>About Us</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Menu;