import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SignInForm from './SignInForm';
import './SignInPage.scss';

const SignInPage = () => {
  useTitle('Sign In');
  return (
    <div className="signin-page">
      <div className="signin-page__container">
        <div className="signin-page__text">
          <h1>sign in & order today</h1>
          <p>
            If you don't have an account you can{' '}
            <Link to="/signup">Signup Here</Link>
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
