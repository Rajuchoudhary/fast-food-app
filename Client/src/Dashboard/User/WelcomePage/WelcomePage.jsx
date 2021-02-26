import { useSelector } from 'react-redux';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import useTitle from '../../../hooks/useTitle';
import './WelcomePage.scss';

const WelcomePage = () => {
  const userInfo = useSelector((state) => state.userInfo);

  useTitle(`Welcome Back, ${userInfo?.name}`);
  return (
    <DashboardHolder>
      <div className="welcome-page">
        <h1>
          <span>welcome back,</span>
          <br /> {userInfo?.name}
        </h1>
      </div>
    </DashboardHolder>
  );
};

export default WelcomePage;
