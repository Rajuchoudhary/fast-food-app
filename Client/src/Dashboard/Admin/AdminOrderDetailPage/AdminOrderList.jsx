import { Link } from 'react-router-dom';

const AdminOrderList = ({ data }) => {
  return (
    <table className="admin-order-detail__list">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data?.items?.map((item) => {
          return (
            <tr key={item?.id}>
              <td>
                <Link target="_blank" to={`/item-detail/${item?.id}`}>
                  {item?.name}
                </Link>
              </td>
              <td>
                <img src={item?.image} alt="" />
              </td>
              <td>${item?.price}</td>
              <td>{item?.qty}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminOrderList;
