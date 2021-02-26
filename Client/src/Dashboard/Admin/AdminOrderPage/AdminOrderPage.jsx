import { AiOutlineCheck } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import Select from '../../../components/FormElements/Select/Select';
import Loading from '../../../components/Loading/Loading';
import Message from '../../../components/Notification/Message/Message';
import PagePagination from '../../../components/PagePagination/PagePagination';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import useGetOrders from '../../../hooks/useGetOrders';
import usePageClick from '../../../hooks/usePageClick';
import GetFormattedDate from '../../../utils/getFormattedDate';
import './AdminOrderPage.scss';

const list = ['all', 'delivered', 'notDelivered'];

const AdminOrderPage = () => {
  const {
    currentPage,
    filterState,
    handleFilterChange,
    onPageClick,
  } = usePageClick();

  const [loading, data, error] = useGetOrders(
    'admin',
    currentPage,
    filterState
  );

  return (
    <DashboardHolder>
      <div className="admin-order-page">
        <div className="admin-order-page__header">
          <h5>all orders ({data?.totalOrder}) </h5>
          <form className="admin-order-page__form">
            <Select
              list={list}
              name="category"
              onChange={handleFilterChange}
              value={filterState ? filterState : ''}
              msg={error?.errors?.map(
                (item, index) => item.field === 'category' && `${item.message} `
              )}
            />
          </form>
        </div>
        <ResponseHandler error={error} data={data} />
        <div className="admin-order-page__content">
          {loading ? (
            <Loading big />
          ) : data?.totalOrder === 0 ? (
            <Message msg="No Orders Yet" />
          ) : (
            <>
              <div className="admin-order-page__table">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Delivered</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.orderList?.map((item) => {
                      return (
                        <tr key={item?._id}>
                          <td>{item?._id}</td>
                          <td>{GetFormattedDate(item?.createdAt)}</td>
                          <td>
                            {item?.isDelivered ? (
                              <AiOutlineCheck
                                style={{
                                  color: 'var(--green)',
                                  fontSize: '2rem',
                                }}
                              />
                            ) : (
                              <IoMdClose
                                style={{
                                  color: 'var(--red)',
                                  fontSize: '2rem',
                                }}
                              />
                            )}
                          </td>
                          <td>
                            <Link to={`/admin/orders/${item._id}`}>
                              <BsThreeDots />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {data?.totalOrder > 10 && (
                <div className="admin-order-page__pagination">
                  <PagePagination
                    activePage={currentPage}
                    onChange={onPageClick}
                    totalItemsCount={data?.totalOrder ? data?.totalOrder : 0}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </DashboardHolder>
  );
};

export default AdminOrderPage;
