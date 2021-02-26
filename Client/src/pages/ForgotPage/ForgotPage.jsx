import ForgotForm from './ForgotForm';
import './ForgotPage.scss';

const ForgotPage = () => {
  return (
    <div className="forgot-page">
      <div className="forgot-page__container">
        <div className="forgot-page__text">
          <h1>forgot password?</h1>
          <p>Insert your email to reset your password.</p>
        </div>
        <ForgotForm />
      </div>
    </div>
  );
};

export default ForgotPage;
