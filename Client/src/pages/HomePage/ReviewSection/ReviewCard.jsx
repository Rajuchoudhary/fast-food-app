import Rating from '../../../components/Rating/Rating';

const ReviewCard = ({ data }) => {
  return (
    <div className="review-card">
      <div className="review-card__photo">
        <img src={data.image} alt="" />
      </div>
      <div className="review-card__detail">
        <h4>{data.name}</h4>
        <Rating text={false} value={data.rating} />
      </div>
      <p>{data.review}</p>
    </div>
  );
};

export default ReviewCard;
