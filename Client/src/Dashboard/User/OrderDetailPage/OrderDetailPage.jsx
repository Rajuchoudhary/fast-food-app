import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import { LinkButtonBlack } from '../../../components/LinkButton/LinkButton';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import useGetOrderDetail from '../../../hooks/useGetOrderDetail';
import OrderDetail from './OrderDetail';
import './OrderDetailPage.scss';
import OrderItem from './OrderItem';
import OrderList from './OrderList';

const OrderDetailPage = () => {
  const { orderId } = useParams();

  const [loading, data, error] = useGetOrderDetail('user', orderId);

  const { data: reviewData, error: reviewError } = useSelector(
    (state) => state.userAddReview
  );

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Ticket',
  });

  return (
    <DashboardHolder>
      <div className="order-detail">
        {loading ? (
          <Loading big />
        ) : data ? (
          <>
            <div className="order-detail__header">
              <h5>
                Order ID: <small>{data?._id}</small>
              </h5>
              <p
                style={{
                  backgroundColor: `${
                    data?.isDelivered ? 'var(--green)' : 'var(--red)'
                  }`,
                }}
              >
                {data?.isDelivered ? 'delivered' : 'Not Delivered'}
              </p>
            </div>

            <div className="order-detail__content">
              <div className="order-detail__btns">
                <LinkButtonBlack btnLink="/orders" btnText="back to orders" />

                <div>
                  {data?.isPaid ? (
                    <p
                      style={{ backgroundColor: 'var(--green)' }}
                      className="order-detail__btn"
                    >
                      Paid
                    </p>
                  ) : (
                    <Link
                      style={{ backgroundColor: 'var(--red)' }}
                      className="order-detail__btn"
                      target="_blank"
                      to={`/paynow`}
                    >
                      Pay Now
                    </Link>
                  )}
                </div>
              </div>

              <div
                className="order-detail__table content-to-print"
                ref={componentRef}
              >
                <OrderList data={data} />
                <OrderDetail data={data} />
                <button className="order-detail__invoice" onClick={handlePrint}>
                  print invoice
                </button>
              </div>
              <div className="order-detail__orders">
                <h5>Orders List</h5>
                <ResponseHandler error={reviewError} data={reviewData} />
                <div className="order-detail__orders__list">
                  {data?.items?.map((item) => {
                    return (
                      <OrderItem
                        key={item._id}
                        isDelivered={data?.isDelivered}
                        data={item}
                        orderId={data?._id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          <ResponseHandler error={error} />
        )}
      </div>
    </DashboardHolder>
  );
};

export default OrderDetailPage;
