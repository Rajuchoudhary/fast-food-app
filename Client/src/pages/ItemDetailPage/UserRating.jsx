import UserImg from '../../assets/imgae/3.jpg';
import Rating from '../../components/Rating/Rating';
import GetFormattedDate from '../../utils/getFormattedDate';

const UserRating = ({ review }) => {
  return (
    <div className="user-rating">
      <div className="user-rating__photo">
        <img
          src={review?.user?.image?.url ? review?.user?.image?.url : UserImg}
          alt=""
        />
      </div>
      <div className="user-rating__detail">
        <h4>{review?.user?.name}</h4>
        <div className="user-rating__rating">
          <Rating value={review?.rating} text={false} />
        </div>
        <small>{GetFormattedDate(review?.createdAt)}</small>
      </div>

      <p className="user-rating__text">{review?.comment}</p>
    </div>
  );
};

export default UserRating;
