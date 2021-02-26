import ResetForm from './ResetForm';
import './ResetPage.scss';

const ResetPage = () => {
  return (
    <div className="reset-page">
      <div className="reset-page__container">
        <div className="reset-page__text">
          <h1>Update Password</h1>
          <p>Now update your Password.</p>
        </div>
        <ResetForm />
      </div>
    </div>
  );
};

export default ResetPage;
