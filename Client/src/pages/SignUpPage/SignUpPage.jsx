import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SignUpForm from './SignUpForm';
import './SignUpPage.scss';

const SignUpPage = () => {
  useTitle('Sign Up');
  return (
    <div className="signup-page">
      <div className="signup-page__container">
        <div className="signup-page__text">
          <h1>sign up & order today</h1>
          <p>
            If you have an account you can <Link to="/signin">Signin Here</Link>
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
