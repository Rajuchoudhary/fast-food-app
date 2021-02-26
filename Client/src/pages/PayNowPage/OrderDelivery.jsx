const OrderDelivery = ({ orderDetail }) => {
  return (
    <div className="pay-now-page__delivery">
      <h1>Delivery Detail</h1>
      <p>
        city: <span>{orderDetail?.deliveryDetail?.city}</span>
      </p>
      <p>
        postalCode: <span>{orderDetail?.deliveryDetail?.postalCode}</span>
      </p>
      <p>
        state: <span>{orderDetail?.deliveryDetail?.state}</span>
      </p>
      <p>
        country: <span>{orderDetail?.deliveryDetail?.country}</span>
      </p>
      <p>
        Address: <span>{orderDetail?.deliveryDetail?.address}</span>
      </p>
      <p>
        mobile no: <span>{orderDetail?.mobileNo}</span>
      </p>
    </div>
  );
};

export default OrderDelivery;
