
import logo from '../../assets/appLogo.jpg';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='navigation'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;