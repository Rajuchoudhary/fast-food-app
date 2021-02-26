import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import Input from '../../../components/FormElements/Input/Input';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { userUpdateDetailAction } from '../../../redux/actions/userActions';
import { USER_UPDATE_DETAIL_RESET_STATE } from '../../../redux/constants/userConstants';
import './SettingPage.scss';

const SettingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);
  const { loading, data, error } = useSelector(
    (state) => state.userUpdateDetail
  );

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobileNo: 0,
  });

  useEffect(() => {
    if (userInfo?.email) {
      setFormState({
        name: userInfo?.name,
        email: userInfo?.email,
        mobileNo: userInfo?.mobileNo,
      });
    }
    dispatch({ type: USER_UPDATE_DETAIL_RESET_STATE });
    return () => {
      dispatch({ type: USER_UPDATE_DETAIL_RESET_STATE });
    };
  }, [userInfo, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdateDetailAction(formState, history));
  };

  return (
    <DashboardHolder>
      <div className="setting-page">
        <div className="setting-page__header">
          <h5>profile setting</h5>
        </div>
        <div className="setting-page__content">
          <form className="setting-page__form" onSubmit={handleSubmit}>
            <ResponseHandler error={error} data={data} />
            <Input
              name="name"
              value={formState['name'] ? formState['name'] : ''}
              onChange={handleChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'name' && `${item.message} `
              )}
              placeholder="name..."
            />
            <Input
              name="email"
              value={formState['email'] ? formState['email'] : ''}
              onChange={handleChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'email' && `${item.message} `
              )}
              placeholder="email..."
            />
            <Input
              name="mobileNo"
              value={formState['mobileNo'] ? formState['mobileNo'] : ''}
              onChange={handleChange}
              msg={error?.errors?.map(
                (item, index) => item.field === 'mobileNo' && `${item.message} `
              )}
              placeholder="mobile No..."
            />
            {loading ? (
              <Button type="submit" btnText={<Loading />} />
            ) : (
              <Button type="submit" btnText="update" />
            )}
          </form>
        </div>
      </div>
    </DashboardHolder>
  );
};

export default SettingPage;
