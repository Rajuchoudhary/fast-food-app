import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Success from '../../components/Notification/Success/Success';
import { CLEAR_ORDER } from '../../redux/constants/orderConstants';
import './ThankyouPage.scss';

const ThankyouPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      dispatch({ type: CLEAR_ORDER });
      history.push('/menu');
    }
    const counter = window.setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  });

  return (
    <div className="thankyou-page">
      <div className="thankyou-page__container">
        <Success>
          <h4>
            Thank you for your order. you can visit{' '}
            <Link to="/dashboard">Dashboard</Link> for order detail
          </h4>{' '}
          <br />
        </Success>
        <h1>
          your will be redirected to{' '}
          <Link to="/dashboard">Menu Page in {count}</Link>
        </h1>
      </div>
    </div>
  );
};

export default ThankyouPage;
