import { useEffect, useState } from 'react';
import { FaCreditCard, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoLogoPaypal } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import { userUpdateOrderAction } from '../../redux/actions/userActions';
import { RESET_UPDATE_ORDER } from '../../redux/constants/userConstants';
import { subTotal } from '../../utils/cartFunctions';

const UpdatePaymentAndDelivery = ({ orderDetail, orderId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    loading: updateLoading,
    data: updateData,
    error: updateError,
  } = useSelector((state) => state.updateOrder);

  const [formState, setFormState] = useState({
    paymentMethod: orderDetail?.paymentMethod
      ? orderDetail?.paymentMethod
      : 'cod',
  });

  const [deliveryFormState, setDeliveryFormState] = useState({
    city: '',
    postalCode: '',
    state: '',
    country: '',
    address: '',
    mobileNo: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...deliveryFormState };
    newState[name] = value;

    setDeliveryFormState(newState);
  };

  useEffect(() => {
    if (orderDetail?.deliveryDetail) {
      setDeliveryFormState({
        ...orderDetail?.deliveryDetail,
        mobileNo: orderDetail?.mobileNo,
      });
    }
  }, [orderDetail, dispatch]);

  useEffect(() => {
    dispatch({ type: RESET_UPDATE_ORDER });
    return () => {
      dispatch({ type: RESET_UPDATE_ORDER });
    };
  }, [dispatch]);

  const handlePaymentChange = (e) => {
    const text = e.target.value;
    setFormState({ ...formState, paymentMethod: text });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userUpdateOrderAction(
        {
          orderId,
          subTotal: subTotal(orderDetail?.items),
          items: orderDetail?.items,
          paymentMethod: formState.paymentMethod,
          ...deliveryFormState,
        },
        history
      )
    );
  };

  return (
    <>
      <div className="update-order-page__payment">
        <h2 className="update-order-page__title">payment options</h2>
        <div className="update-order-page__payment__detail">
          <div className="update-order-page__payment-options">
            <label
              htmlFor="stripe"
              className={`update-order-page__payment-type ${
                formState['paymentMethod'] === 'stripe'
                  ? 'update-order-page__payment-active'
                  : ''
              }`}
            >
              <small>
                <IoIosCheckmarkCircle />
              </small>
              <p>
                <span>
                  <FaCreditCard />
                </span>
                Credit / Debit Card
              </p>
              <input
                type="radio"
                hidden
                id="stripe"
                name="paymentMethod"
                value="stripe"
                checked={formState['paymentMethod'] === 'stripe'}
                onChange={handlePaymentChange}
              />
            </label>

            <label
              htmlFor="paypal"
              className={`update-order-page__payment-type ${
                formState['paymentMethod'] === 'paypal'
                  ? 'update-order-page__payment-active'
                  : ''
              }`}
            >
              <small>
                <IoIosCheckmarkCircle />
              </small>
              <p>
                <span>
                  <IoLogoPaypal />
                </span>
                pay with paypal
              </p>
              <input
                type="radio"
                hidden
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formState['paymentMethod'] === 'paypal'}
                onChange={handlePaymentChange}
              />
            </label>

            <label
              htmlFor="cod"
              className={`update-order-page__payment-type ${
                formState['paymentMethod'] === 'cod'
                  ? 'update-order-page__payment-active'
                  : ''
              }`}
            >
              <small>
                <IoIosCheckmarkCircle />
              </small>
              <p>
                <span>
                  <FaMoneyCheckAlt />
                </span>
                cash on delivery
              </p>
              <input
                type="radio"
                hidden
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={formState['paymentMethod'] === 'cod'}
                onChange={handlePaymentChange}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="update-order-page__delivery">
        <h2 className="update-order-page__title">delivery details</h2>
        <form className="update-order-page__form" onSubmit={handleSubmit}>
          <ResponseHandler error={updateError} data={updateData} />

          <Input
            name="city"
            value={deliveryFormState['city'] ? deliveryFormState['city'] : ''}
            onChange={handleInputChange}
            msg={updateError?.errors?.map(
              (item, index) => item.field === 'city' && `${item.message} `
            )}
            placeholder="city..."
          />
          <Input
            name="postalCode"
            value={
              deliveryFormState['postalCode']
                ? deliveryFormState['postalCode']
                : ''
            }
            onChange={handleInputChange}
            msg={updateError?.errors?.map(
              (item, index) => item.field === 'postalCode' && `${item.message} `
            )}
            placeholder="postal code..."
          />
          <Input
            name="state"
            value={deliveryFormState['state'] ? deliveryFormState['state'] : ''}
            onChange={handleInputChange}
            msg={updateError?.errors?.map(
              (item, index) => item.field === 'state' && `${item.message} `
            )}
            placeholder="state..."
          />
          <Input
            name="country"
            value={
              deliveryFormState['country'] ? deliveryFormState['country'] : ''
            }
            onChange={handleInputChange}
            msg={updateError?.errors?.map(
              (item, index) => item.field === 'country' && `${item.message} `
            )}
            placeholder="country..."
          />
          <Input
            name="address"
            value={
              deliveryFormState['address'] ? deliveryFormState['address'] : ''
            }
            onChange={handleInputChange}
            msg={updateError?.errors?.map(
              (item, index) => item.field === 'address' && `${item.message} `
            )}
            placeholder="address..."
          />
          <Input
            name="mobileNo"
            value={
              deliveryFormState['mobileNo'] ? deliveryFormState['mobileNo'] : ''
            }
            onChange={handleInputChange}
            msg={updateError?.errors?.map(
              (item, index) => item.field === 'mobileNo' && `${item.message} `
            )}
            placeholder="mobile no..."
          />
          {updateLoading ? (
            <Button icon={true} btnText={<Loading />} />
          ) : (
            <Button type="submit" icon={true} btnText="update order" />
          )}
        </form>
      </div>
    </>
  );
};

export default UpdatePaymentAndDelivery;
