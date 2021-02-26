import { deliveryCost, subTotal, totalItems } from '../../utils/cartFunctions';

const OrderDetail = ({ orderDetail }) => {
  return (
    <div className="pay-now-page__detail">
      <p>
        Total Items <span>{totalItems(orderDetail?.items)}</span>
      </p>
      <p>
        Sub total <span>${subTotal(orderDetail?.items)} USD</span>
      </p>
      <p>
        Delivery Charge{' '}
        <span>${deliveryCost(subTotal(orderDetail?.items))} USD</span>
      </p>
      <p className="pay-now-page__detail--total">
        Total cost{' '}
        <span>
          $
          {subTotal(orderDetail?.items) +
            deliveryCost(subTotal(orderDetail?.items))}{' '}
          USD
        </span>
      </p>
    </div>
  );
};

export default OrderDetail;
