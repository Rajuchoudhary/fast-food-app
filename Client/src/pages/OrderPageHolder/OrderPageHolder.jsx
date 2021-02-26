import './OrderPageHolder.scss';

const OrderPageHolder = ({ left, children }) => {
  return (
    <div className="order-page-holder">
      <div className="order-page-holder__container">
        <div className="order-page-holder__content">
          <div className="order-page-holder__left">{left}</div>
          <div className="order-page-holder__right">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderPageHolder;
