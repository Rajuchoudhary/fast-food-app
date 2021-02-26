import { useSelector } from 'react-redux';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import useTitle from '../../../hooks/useTitle';
import './AdminWelcomePage.scss';

const AdminWelcomePage = () => {
  const userInfo = useSelector((state) => state.userInfo);

  useTitle(`Welcome Back, ${userInfo?.name}`);
  return (
    <DashboardHolder>
      <div className="admin-welcome-page">
        <h1>
          <span>welcome back,</span>
          <br /> {userInfo?.name}
        </h1>
      </div>
    </DashboardHolder>
  );
};

export default AdminWelcomePage;
