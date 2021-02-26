import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import { LinkButtonBlack } from '../../../components/LinkButton/LinkButton';
import EditItemForm from './EditItemForm';
import './EditItemPage.scss';

const EditItemPage = () => {
  return (
    <DashboardHolder>
      <div className="edit-item-page">
        <div className="edit-item-page__header">
          <h5>update item</h5>
        </div>
        <div className="edit-item-page__container">
          <div className="edit-item-page__btn">
            <LinkButtonBlack btnLink="/admin/menu" btnText="back to menu" />
          </div>
          <EditItemForm />
        </div>
      </div>
    </DashboardHolder>
  );
};

export default EditItemPage;
