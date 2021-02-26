import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserImg from '../../../assets/imgae/3.jpg';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import Loading from '../../../components/Loading/Loading';
import Message from '../../../components/Notification/Message/Message';
import PagePagination from '../../../components/PagePagination/PagePagination';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { adminGetUsersAction } from '../../../redux/actions/adminActions';
import GetFormattedDate from '../../../utils/getFormattedDate';
import AdminUserData from './AdminUserData';
import './AdminUserPage.scss';

const AdminUserPage = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.adminGetUsers);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(adminGetUsersAction(currentPage));
  }, [dispatch, currentPage]);

  return (
    <DashboardHolder>
      <div className="admin-user-page">
        <div className="admin-user-page__header">
          <h5>all users ({data?.totalUser})</h5>
          {data?.userList && <AdminUserData data={data?.userList} />}
        </div>
        <ResponseHandler error={error} />
        <div className="admin-user-page__content">
          {loading ? (
            <Loading big />
          ) : data?.totalUser === 0 ? (
            <Message msg="No Users Yet" />
          ) : (
            <div className="admin-user-page__table">
              <table>
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>User Name</th>
                    <th>Photo</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Registered Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.userList?.map((user, index) => {
                    return (
                      <tr key={user?.id}>
                        <td>{(currentPage - 1) * 10 + index + 1}</td>
                        <td>{user?.name}</td>
                        <td>
                          <img
                            src={
                              user?.image?.url?.length > 0
                                ? user?.image?.url
                                : UserImg
                            }
                            alt=""
                          />
                        </td>
                        <td>{user?.email}</td>
                        <td>{user?.mobileNo}</td>
                        <td>{GetFormattedDate(user?.createdAt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {data?.totalUser > 10 && (
            <div className="admin-user-page__pagination">
              <PagePagination
                activePage={currentPage}
                onChange={onPageClick}
                totalItemsCount={data?.totalUser ? data?.totalUser : 0}
              />
            </div>
          )}
        </div>
      </div>
    </DashboardHolder>
  );
};

export default AdminUserPage;
