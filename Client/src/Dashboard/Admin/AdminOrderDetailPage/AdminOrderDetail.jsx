import { subTotal, totalItems } from '../../../utils/cartFunctions';
import GetFormattedDate, {
  GetTimeDifference,
} from '../../../utils/getFormattedDate';

const AdminOrderDetail = ({ data }) => {
  return (
    <table className="admin-order-detail__detail">
      <tbody>
        <tr>
          <td>Ordered By</td>
          <td>{data?.user?.name}</td>
          <td>Delivery Address</td>
          <td>
            City: <code> {data?.deliveryDetail?.city} </code> <br />
            State: <code> {data?.deliveryDetail?.state} </code> <br />
            Country: <code> {data?.deliveryDetail?.country} </code> <br />
            Postal Code:{' '}
            <code>
              {data?.deliveryDetail?.postalCode} <br />{' '}
            </code>
            Address: <code> {data?.deliveryDetail?.address} </code>
          </td>
        </tr>
        <tr>
          <td>Total Items</td>
          <td>{totalItems(data?.items)}</td>
          <td>Order Time</td>
          <td>{GetFormattedDate(data?.createdAt)}</td>
        </tr>
        <tr>
          <td>Sub Total</td>
          <td>${subTotal(data?.items)}</td>
          <td>Delivery Time</td>
          <td>
            {data?.isDelivered
              ? GetFormattedDate(data?.deliveredAt)
              : 'Not Delivered'}
          </td>
        </tr>
        <tr>
          <td>Delivery Charge</td>
          <td>${data?.deliveryCost} USD</td>
          <td>Delivered In</td>
          <td className="admin-order-detail__time">
            {' '}
            {data?.deliveredAt
              ? GetTimeDifference(data?.deliveredAt, data?.createdAt) +
                ' min. ONLY'
              : '--'}
          </td>
        </tr>
        <tr>
          <td>Payment Method</td>
          <td>{data?.paymentMethod}</td>
          <td>Transaction ID</td>
          <td>{data?.transactionId ? data?.transactionId : '--'}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Paid At</td>
          <td>{data?.paidAt ? GetFormattedDate(data?.paidAt) : '--'}</td>
        </tr>
        <tr className="admin-order-detail__total">
          <td></td>
          <td></td>
          <td>Total Cost</td>
          <td>${data?.totalCost} USD</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminOrderDetail;
