import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../../../components/ItemCard/ItemCard';
import { LinkButtonGreen } from '../../../components/LinkButton/LinkButton';
import Loading from '../../../components/Loading/Loading';
import Message from '../../../components/Notification/Message/Message';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { getHomePageDataAction } from '../../../redux/actions/publicActions';
import './MenuSection.scss';

const MenuSection = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.homePageData);

  useEffect(() => {
    dispatch(getHomePageDataAction());
  }, [dispatch]);

  return (
    <div className="menu-section" id="menu">
      <div className="menu-section__container">
        <h2>our most latest food</h2>
        <ResponseHandler error={error} data={data} />
        {loading ? (
          <Loading big={true} />
        ) : data?.itemList?.length === 0 ? (
          <Message msg="No Item Yet." />
        ) : (
          data?.itemList?.length > 0 && (
            <>
              <div className="menu-section__grid">
                {data?.itemList?.map((item) => {
                  return <ItemCard key={item._id} data={item} />;
                })}
              </div>
              <LinkButtonGreen btnLink="/menu" btnText="view all" />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MenuSection;
