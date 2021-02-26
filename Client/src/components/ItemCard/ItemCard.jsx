import React from 'react';
import { Link } from 'react-router-dom';
import CardAction from '../CardAction/CardAction';
import Rating from '../Rating/Rating';
import './ItemCard.scss';

const ItemCard = ({ data }) => {
  return (
    <div className="item-card">
      <div className="item-card__photo">
        <img src={data?.image?.url} alt="item" />
      </div>

      <div className="item-card__text">
        <Link to={`/item-detail/${data?._id}`} className="item-card__title">
          {data?.itemName}
        </Link>
        <p className="item-card__description">
          {data?.description?.substring(0, 100)}...
        </p>
      </div>
      <Rating value={data?.rating} />
      <CardAction data={data} />
    </div>
  );
};

export default ItemCard;
