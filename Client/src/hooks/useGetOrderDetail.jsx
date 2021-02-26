import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminGetOrderDetailAction } from '../redux/actions/adminActions';
import { userGetOrderDetailAction } from '../redux/actions/userActions';

const useGetOrderDetail = (userType, orderId) => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) =>
    userType === 'admin' ? state.adminGetOrderDetail : state.getOrderDetail
  );

  useEffect(() => {
    if (userType === 'admin') {
      dispatch(adminGetOrderDetailAction(orderId));
    } else {
      dispatch(userGetOrderDetailAction(orderId));
    }
  }, [dispatch, orderId, userType]);

  return [loading, data, error];
};

export default useGetOrderDetail;
