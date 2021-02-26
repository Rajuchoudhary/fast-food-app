import { deliveryCost, subTotal, totalItems } from '../../utils/cartFunctions';

const OrderSummery = ({ orderDetail }) => {
  return (
    <div className="update-order-page__summery">
      <h2 className="update-order-page__title">summery</h2>
      <div className="update-order-page__summery__detail">
        <p>
          Total Items <span>{totalItems(orderDetail?.items)}</span>
        </p>
        <p>
          Sub total <span>${subTotal(orderDetail?.items)} USD</span>
        </p>
        <p>
          Delivery Cost{' '}
          <span>${deliveryCost(subTotal(orderDetail?.items))} USD</span>
        </p>
        <p className="update-order-page__summery__detail--total">
          Total cost{' '}
          <span>
            $
            {subTotal(orderDetail?.items) +
              deliveryCost(subTotal(orderDetail?.items))}{' '}
            USD
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummery;
