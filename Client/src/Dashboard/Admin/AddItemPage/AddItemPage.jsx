import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import { LinkButtonBlack } from '../../../components/LinkButton/LinkButton';
import AddItemForm from './AddItemForm';
import './AddItemPage.scss';

const AddItemPage = () => {
  return (
    <DashboardHolder>
      <div className="add-item-page">
        <div className="add-item-page__header">
          <h5>add new item</h5>
        </div>
        <div className="add-item-page__container">
          <div className="add-item-page__btn">
            <LinkButtonBlack btnLink="/admin/menu" btnText="back to menu" />
          </div>
          <AddItemForm />
        </div>
      </div>
    </DashboardHolder>
  );
};

export default AddItemPage;
