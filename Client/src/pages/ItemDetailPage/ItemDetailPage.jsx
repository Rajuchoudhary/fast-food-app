import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardAction from '../../components/CardAction/CardAction';
import { LinkButtonBlack } from '../../components/LinkButton/LinkButton';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Notification/Message/Message';
import Rating from '../../components/Rating/Rating';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import useTitle from '../../hooks/useTitle';
import { getItemDetailAction } from '../../redux/actions/publicActions';
import './ItemDetailPage.scss';
import UserRating from './UserRating';

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.itemDetail);

  useTitle(data?.itemName);
  useEffect(() => {
    dispatch(getItemDetailAction(itemId));
  }, [dispatch, itemId]);

  return (
    <div className="item-detail-page">
      <div className="item-detail-page__container">
        <div className="item-detail-page__btn">
          <LinkButtonBlack btnLink="/menu" btnText="beck to menu" />
        </div>
        <ResponseHandler error={error} />
        {loading ? (
          <Loading big />
        ) : data?.itemName ? (
          <>
            <div className="item-detail-page__card">
              <div className="item-detail-page__card__photo">
                <img src={data?.image?.url} alt="" />
              </div>
              <div className="item-detail-page__card__text">
                <h2>{data?.itemName}</h2>
                <p>{data?.description}</p>
                <div className="item-detail-page__card__rating">
                  <Rating value={data?.rating} />
                  {data?.reviews ? (
                    <p className="item-detail-page__card__total">
                      ({data?.reviews?.length})
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="item-detail-page__card__action">
                  <CardAction data={data} />
                </div>
              </div>
            </div>

            {data?.reviews?.length > 0 ? (
              <div className="item-detail-page__ratings" id="review">
                <h1>reviews & ratings</h1>
                <div className="item-detail-page__list">
                  {data?.reviews?.map((review) => {
                    return <UserRating key={review?._id} review={review} />;
                  })}
                </div>
              </div>
            ) : (
              <Message msg="No Rating yet!" />
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetailPage;
