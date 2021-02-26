import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import './Rating.scss';

const Rating = ({ value, text = true }) => {
  return (
    <div className="rating">
      {text && <p>Rating:</p>}
      <div className="rating__stars">
        {value >= 1 ? (
          <BsFillStarFill />
        ) : value >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}

        {value >= 2 ? (
          <BsFillStarFill />
        ) : value >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}

        {value >= 3 ? (
          <BsFillStarFill />
        ) : value >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {value >= 4 ? (
          <BsFillStarFill />
        ) : value >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
        {value >= 5 ? (
          <BsFillStarFill />
        ) : value >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </div>
      <p>{Math.round(value * 100) / 100}</p>
    </div>
  );
};

export default Rating;
