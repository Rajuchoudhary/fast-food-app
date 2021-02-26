import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminGetOrdersAction } from '../redux/actions/adminActions';
import { userGetOrdersAction } from '../redux/actions/userActions';

const useGetOrders = (userType, currentPage, filterState) => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) =>
    userType === 'admin' ? state.adminGetOrders : state.userOrders
  );

  useEffect(() => {
    if (userType === 'admin') {
      dispatch(adminGetOrdersAction(currentPage, filterState));
    } else {
      dispatch(userGetOrdersAction(currentPage));
    }
  }, [dispatch, currentPage, filterState, userType]);

  return [loading, data, error];
};

export default useGetOrders;
