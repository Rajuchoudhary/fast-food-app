import ReviewCard from './ReviewCard';
import { data } from './ReviewData';
import './ReviewSection.scss';

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="review-section__container">
        <h1>what customer says about us</h1>
        <div className="review-section__list">
          {data?.map((item) => {
            return <ReviewCard key={item.name} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
