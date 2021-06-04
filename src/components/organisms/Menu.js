import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai'
import { FaShoppingCart, FaUserNinja } from 'react-icons/fa'
import { GiNinjaStar } from 'react-icons/gi'
import  '../../style/Menu.scss'
const Menu = () => {
    return (
        <nav className="menu_toggle">
        <input defaultChecked="checked" className="menu-toggler" id="menu-toggler" type="checkbox" />
        <label htmlFor="menu-toggler" />
        <ul>
          <li className="menu-item">
          <Link to='/login'><AiOutlineHeart></AiOutlineHeart></Link>
          </li>
          <li className="menu-item">
          <Link to='/login'><FaShoppingCart></FaShoppingCart></Link>
          </li>
          <li className="menu-item">
            <Link to='/login'><AiOutlineLogin></AiOutlineLogin></Link>
          </li>
          <li className="menu-item">
          <Link to='/login'><AiOutlineLogout></AiOutlineLogout></Link>
          </li>
          <li className="menu-item">
          <Link to='/login'><FaUserNinja></FaUserNinja></Link>
          </li>
          <li className="menu-item">
          <Link to='/login'><GiNinjaStar></GiNinjaStar></Link>
          </li>
        </ul>
      </nav>
    )
}
export default Menu;