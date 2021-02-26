import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './Steps.scss';

const Steps = ({ step = 1 }) => {
  return (
    <div className="steps">
      <div className="steps__container">
        <div className="steps__box">
          <div className="steps__icon">
            <span>
              <IoIosCheckmarkCircleOutline
                style={{
                  color: `${step >= 1 ? 'var(--green)' : 'var(--grey-1)'}`,
                }}
              />
            </span>
            <div
              className="steps__bar"
              style={{
                backgroundColor: `${
                  step >= 2 ? 'var(--green)' : 'var(--grey-1)'
                }`,
              }}
            ></div>
          </div>
          <br />
          <p>Cart</p>
        </div>
        <div className="steps__box">
          <div className="steps__icon">
            <span>
              <IoIosCheckmarkCircleOutline
                style={{
                  color: `${step >= 2 ? 'var(--green)' : 'var(--grey-1)'}`,
                }}
              />
            </span>
            <div
              className="steps__bar"
              style={{
                backgroundColor: `${
                  step >= 3 ? 'var(--green)' : 'var(--grey-1)'
                }`,
              }}
            ></div>
          </div>
          <br />
          <p>Payment</p>
        </div>
        <div className="steps__box">
          <div className="steps__icon">
            <span>
              <IoIosCheckmarkCircleOutline
                style={{
                  color: `${step >= 3 ? 'var(--green)' : 'var(--grey-1)'}`,
                }}
              />
            </span>
            <div
              className="steps__bar"
              style={{
                backgroundColor: `${
                  step >= 4 ? 'var(--green)' : 'var(--grey-1)'
                }`,
              }}
            ></div>
          </div>
          <br />
          <p>Delivery</p>
        </div>
        <div className="steps__box">
          <div className="steps__icon">
            <span>
              <IoIosCheckmarkCircleOutline
                style={{
                  color: `${step >= 4 ? 'var(--green)' : 'var(--grey-1)'}`,
                }}
              />
            </span>
          </div>
          <br />
          <p>Order and Pay</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
