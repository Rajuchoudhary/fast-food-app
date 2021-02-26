import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Notification/Message/Message';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import useTitle from '../../hooks/useTitle';
import { userPlaceOrderAction } from '../../redux/actions/userActions';
import { RESET_USER_PLACE_ORDER } from '../../redux/constants/userConstants';
import { subTotal } from '../../utils/cartFunctions';
import CartPageHolder from '../CartPageHolder/CartPageHolder';
import CartSection from '../CartSection/CartSection';
import './DeliveryPage.scss';

const DeliveryPage = () => {
  useTitle('Delivery Details');
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.userInfo);
  const { items, paymentMethod } = useSelector((state) => state.cart);

  const { loading, data, error } = useSelector((state) => state.userPlaceOrder);

  const [formState, setFormState] = useState({
    city: '',
    postalCode: '',
    state: '',
    country: '',
    address: '',
    mobileNo: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userPlaceOrderAction(
        { items, paymentMethod, ...formState, subTotal: subTotal(items) },
        history
      )
    );
  };

  useEffect(() => {
    dispatch({ type: RESET_USER_PLACE_ORDER });
    return () => {
      dispatch({ type: RESET_USER_PLACE_ORDER });
    };
  }, [dispatch]);

  return (
    <CartPageHolder
      step={3}
      left={<CartSection backLink="/payment" backLinkText="back to payment" />}
    >
      {items?.length === 0 ? null : (
        <div className="delivery-page">
          <h2 className="delivery-page__title">delivery details</h2>
          <form className="delivery-page__form" onSubmit={handleSubmit}>
            <ResponseHandler error={error} data={data} />

            <Input
              name="city"
              value={formState['city'] ? formState['city'] : ''}
              onChange={handleInputChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'city' && `${item.message} `
              )}
              placeholder="city..."
            />
            <Input
              name="postalCode"
              value={formState['postalCode'] ? formState['postalCode'] : ''}
              onChange={handleInputChange}
              msg={error?.errors?.map(
                (item, index) =>
                  item.field === 'postalCode' && `${item.message} `
              )}
              placeholder="postal code..."
            />
            <Input
              name="state"
              value={formState['state'] ? formState['state'] : ''}
              onChange={handleInputChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'state' && `${item.message} `
              )}
              placeholder="state..."
            />
            <Input
              name="country"
              value={formState['country'] ? formState['country'] : ''}
              onChange={handleInputChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'country' && `${item.message} `
              )}
              placeholder="country..."
            />
            <Input
              name="address"
              value={formState['address'] ? formState['address'] : ''}
              onChange={handleInputChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'address' && `${item.message} `
              )}
              placeholder="address..."
            />
            <Input
              name="mobileNo"
              value={formState['mobileNo'] ? formState['mobileNo'] : ''}
              onChange={handleInputChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'mobileNo' && `${item.message} `
              )}
              placeholder="mobile no..."
            />
            {loading ? (
              <Button icon={true} btnText={<Loading />} />
            ) : userInfo?.token && !userInfo?.isAdmin ? (
              <Button type="submit" icon={true} btnText="place order" />
            ) : (
              <Message msg={`You need to Signin / Signup`} />
            )}
          </form>
        </div>
      )}
    </CartPageHolder>
  );
};

export default DeliveryPage;
