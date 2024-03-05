
import { Link } from 'react-router-dom';
import logo from '../../assets/appLogo.jpg';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='navigation'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/aboutus'}>About</Link></li>
                    <li><Link to={'contactus'}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;