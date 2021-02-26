import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import { LinkButtonBlack } from '../../../components/LinkButton/LinkButton';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import useGetOrderDetail from '../../../hooks/useGetOrderDetail';
import { adminUpdateOrderAction } from '../../../redux/actions/adminActions';
import AdminOrderDetail from './AdminOrderDetail';
import './AdminOrderDetailPage.scss';
import AdminOrderList from './AdminOrderList';

const AdminOrderDetailPage = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const [loading, data, error] = useGetOrderDetail('admin', orderId);

  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.adminUpdateOrder
  );

  const setDelivered = (orderId) => {
    dispatch(adminUpdateOrderAction(orderId));
  };

  return (
    <DashboardHolder>
      <div className="admin-order-detail">
        <ResponseHandler error={updateError} />
        {loading ? (
          <Loading big />
        ) : data ? (
          <>
            <div className="admin-order-detail__header">
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
            <div className="admin-order-detail__content">
              <div className="admin-order-detail__btns">
                <LinkButtonBlack
                  btnLink="/admin/orders"
                  btnText="back to orders"
                />

                <div>
                  <p
                    style={{
                      backgroundColor: `${
                        data?.isPaid ? 'var(--green)' : 'var(--red)'
                      }`,
                    }}
                    className="admin-order-detail__btn"
                  >
                    {data?.isPaid ? 'Paid' : 'Not Paid'}
                  </p>
                </div>
              </div>

              <div className="admin-order-detail__table">
                <AdminOrderList data={data} />

                <AdminOrderDetail data={data} />

                {updateLoading ? (
                  <button className="admin-order-detail__setbtn">
                    <Loading />
                  </button>
                ) : data?.isDelivered ? (
                  <span className="admin-order-detail__setbtn">delivered</span>
                ) : data?.isPaid ? (
                  <button
                    className="admin-order-detail__setbtn"
                    onClick={() => setDelivered(orderId)}
                  >
                    set delivered
                  </button>
                ) : (
                  <h1 className="admin-order-detail__setbtn">
                    Waiting for payment!
                  </h1>
                )}
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

export default AdminOrderDetailPage;
