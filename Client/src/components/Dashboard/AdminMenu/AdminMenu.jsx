import { AiFillPieChart } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { IoFastFoodSharp, IoList } from 'react-icons/io5';
import { MdRestaurantMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signoutAction } from '../../../redux/actions/authActions';
import './AdminMenu.scss';

const AdminMenu = () => {
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(signoutAction());
  };
  return (
    <div className="admin-menu">
      <div className="admin-menu__menu">
        <NavLink
          to="/admin/dashboard"
          activeClassName="admin-menu__menu--active"
        >
          <span>
            <AiFillPieChart />
          </span>
          dashboard
        </NavLink>
        <NavLink
          to="/admin/menu"
          activeClassName="admin-menu__menu--active"
          isActive={(match, location) => {
            if (
              location.pathname === '/admin/add-item' ||
              location.pathname === '/admin/menu'
            ) {
              return true;
            }
            return false;
          }}
        >
          <span>
            <MdRestaurantMenu />
          </span>
          menu
        </NavLink>
        <NavLink to="/admin/orders" activeClassName="admin-menu__menu--active">
          <span>
            <IoFastFoodSharp />
          </span>
          orders
        </NavLink>
        <NavLink
          to="/admin/categories"
          activeClassName="admin-menu__menu--active"
        >
          <span>
            <IoList />
          </span>
          categories
        </NavLink>
        <NavLink to="/admin/users" activeClassName="admin-menu__menu--active">
          <span>
            <ImUsers />
          </span>
          users
        </NavLink>
        <NavLink to="/" onClick={signout}>
          <span>
            <FaSignOutAlt />
          </span>
          log out
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
