import { CSVLink } from 'react-csv';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import GetFormattedDate from '../../../utils/getFormattedDate';

const AdminUserData = ({ data }) => {
  const newList = data?.map((item) => {
    return [
      item.name,
      item.email,
      item.mobileNo,
      GetFormattedDate(item.createdAt),
    ];
  });

  const list = [['Name', 'Email', 'Mobile', 'Registered Date'], ...newList];

  return (
    <CSVLink
      className="admin-user-page__btn"
      filename="User Data.csv"
      data={list}
    >
      <span>
        <AiOutlineCloudDownload style={{ color: 'white' }} />
      </span>
    </CSVLink>
  );
};

export default AdminUserData;
