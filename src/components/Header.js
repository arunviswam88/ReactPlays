
import { Link } from 'react-router-dom';
import logo from '../../assets/appLogo.jpg';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const status = useOnlineStatus();
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
                    <li><Link to={'grocerry'}>Grocerry</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
                {status ? 'Online' : 'Offline'}
            </div>
        </div>
    )
}
export default Header;