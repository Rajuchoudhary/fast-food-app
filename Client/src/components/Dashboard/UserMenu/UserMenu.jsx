import { useEffect, useState } from 'react';
import { AiFillPieChart } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserImg from '../../../assets/imgae/place-holder.jpg';
import { signoutAction } from '../../../redux/actions/authActions';
import { userUploadImageAction } from '../../../redux/actions/userActions';
import { UPLOAD_IMAGE_CLEAR_ERROR } from '../../../redux/constants/userConstants';
import { resizeFile } from '../../../utils/ResizeFile';
import Loading from '../../Loading/Loading';
import ResponseHandler from '../../ResponseHandler/ResponseHandler';
import './UserMenu.scss';

const UserMenu = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);

  const { loading, error } = useSelector((state) => state.userUploadImage);

  const [uploadImg, setUploadImg] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    let res;

    setUploadImg(file);
    if (file) {
      res = await resizeFile(file, 320, 250, file.type.split('/')[1]);
      dispatch(
        userUploadImageAction(
          res,
          userInfo?.image?.url ? userInfo?.image?.public_id : ''
        )
      );
    }
  };

  useEffect(() => {
    dispatch({ type: UPLOAD_IMAGE_CLEAR_ERROR });
    return () => {
      dispatch({ type: UPLOAD_IMAGE_CLEAR_ERROR });
    };
  }, [dispatch]);

  const signout = () => {
    dispatch(signoutAction());
  };
  return (
    <div className="user-menu">
      <div className="user-menu__user">
        <form>
          <ResponseHandler error={error} />
          <div className="user-menu__photo">
            <img
              src={
                uploadImg
                  ? URL.createObjectURL(uploadImg)
                  : userInfo?.image?.url?.length > 0
                  ? userInfo?.image?.url
                  : UserImg
              }
              alt="user"
            />
          </div>
          {loading ? (
            <label htmlFor="userImg" className="user-menu__btn">
              <Loading />
            </label>
          ) : (
            <label htmlFor="userImg" className="user-menu__btn">
              change
              <input
                type="file"
                hidden
                id="userImg"
                onChange={handleImageChange}
              />
            </label>
          )}
        </form>
        <h4>{userInfo?.name}</h4>
        <p>id: {userInfo?.id}</p>
      </div>
      <div className="user-menu__menu">
        <NavLink to="/dashboard" activeClassName="user-menu__menu--active">
          <span>
            <AiFillPieChart />
          </span>
          dashboard
        </NavLink>
        <NavLink to="/orders" activeClassName="user-menu__menu--active">
          <span>
            <IoFastFoodSharp />
          </span>
          orders
        </NavLink>
        <NavLink to="/settings" activeClassName="user-menu__menu--active">
          <span>
            <BsFillGearFill />
          </span>
          settings
        </NavLink>
        <NavLink to="/" onClick={signout}>
          <span>
            <FaSignOutAlt />
          </span>
          log out
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
