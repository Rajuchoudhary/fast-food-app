import { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { MdRestaurantMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserImg from '../../assets/imgae/place-holder.jpg';
import { signoutAction } from '../../redux/actions/authActions';
import { totalItems } from '../../utils/cartFunctions';
import { LinkButtonGreen } from '../LinkButton/LinkButton';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.userInfo);

  const signout = () => {
    dispatch(signoutAction());
  };

  return (
    <div className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <MdRestaurantMenu />
        </NavLink>
        <span className="header__icon" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <IoMdClose /> : <HiMenuAlt3 />}
        </span>
        <nav
          className={`header__navigation ${
            showMenu ? 'header__navigation--active' : ''
          } `}
        >
          <div className="header__left">
            <ul className="header__menu">
              <li className="header__menu__item">
                <NavLink
                  to="/"
                  className="header__menu__item__link"
                  activeClassName="activeMenu"
                  isActive={(match, location) => {
                    if (location.pathname === '/') {
                      return true;
                    }
                    return false;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="header__menu__item">
                <NavLink
                  to="/menu"
                  className="header__menu__item__link"
                  activeClassName="activeMenu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="header__menu__item">
                <NavLink
                  to="/services"
                  className="header__menu__item__link"
                  activeClassName="activeMenu"
                >
                  Services
                </NavLink>
              </li>
              <li className="header__menu__item">
                <NavLink
                  to="/faq"
                  className="header__menu__item__link"
                  activeClassName="activeMenu"
                >
                  FAQ
                </NavLink>
              </li>
              <li className="header__menu__item">
                <NavLink
                  to="/contact"
                  className="header__menu__item__link"
                  activeClassName="activeMenu"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <NavLink to="/cart" className="header__bag">
              <span>
                <FiShoppingBag />
              </span>
              <small>{totalItems(items)}</small>
            </NavLink>
            {userInfo?.token ? (
              <button
                className="header__right__link header__right__signout"
                onClick={signout}
              >
                sign out
              </button>
            ) : (
              <NavLink
                to="/signin"
                className="header__right__link header__menu__item__link"
                activeClassName="activeMenu"
              >
                sign in
              </NavLink>
            )}
            {userInfo?.token ? (
              <NavLink
                to={`${userInfo?.isAdmin ? '/admin/dashboard' : '/dashboard'}`}
                className="header__right__btn"
              >
                {userInfo?.isAdmin ? null : (
                  <p className="header__right__btn__photo">
                    <img
                      src={
                        userInfo?.image?.url?.length > 0
                          ? userInfo?.image?.url
                          : UserImg
                      }
                      alt=""
                    />
                  </p>
                )}
                <span>dashboard</span>
              </NavLink>
            ) : (
              <LinkButtonGreen btnLink="/signup" btnText="sign up" />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
