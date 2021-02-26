import AdminSignInForm from './AdminSignInForm';
import './AdminSignInPage.scss';

const AdminSignInPage = () => {
  return (
    <div className="signin-page">
      <div className="signin-page__container">
        <div className="signin-page__text">
          <h1>Welcome Admin</h1>
        </div>
        <AdminSignInForm />
      </div>
    </div>
  );
};

export default AdminSignInPage;
