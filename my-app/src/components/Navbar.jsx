import ihLogo from '../images/ironhack-logo-xs.png';
import menuLogo from '../images/menu-top-xs.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={ihLogo} alt="Ironhack Logo" />
            <img src={menuLogo} alt="Menu icon" />
        </nav>
    );
}

export default Navbar;