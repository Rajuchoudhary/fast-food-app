import { useSelector } from 'react-redux';
import AdminMenu from '../AdminMenu/AdminMenu';
import UserMenu from '../UserMenu/UserMenu';
import './DashboardHolder.scss';

const DashboardHolder = ({ children }) => {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <div className="dashboard-holder">
      <div className="dashboard-holder__container">
        <div className="dashboard-holder__left">
          {userInfo?.isAdmin ? <AdminMenu /> : <UserMenu />}
        </div>
        <div className="dashboard-holder__right">{children}</div>
      </div>
    </div>
  );
};

export default DashboardHolder;
