import { IoIosCheckmarkCircle } from 'react-icons/io';
import UserImg1 from '../../../assets/imgae/1.jpg';
import UserImg2 from '../../../assets/imgae/2.jpg';
import UserImg3 from '../../../assets/imgae/3.jpg';
import UserImg4 from '../../../assets/imgae/4.jpg';
import Img from '../../../assets/imgae/about.png';
import Rating from '../../../components/Rating/Rating';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-section__container">
        <div className="about-section__text">
          <h2>Why We are the Best?</h2>
          <p>
            We are always try to maintain our food quality for our <br />
            customers, and make sure their satisfaction
          </p>
        </div>
        <div className="about-section__content">
          <div className="about-section__list">
            <div className="about-section__card">
              <span className="about-section__card__icon">
                <IoIosCheckmarkCircle />
              </span>
              <div className="about-section__card__text">
                <h5>fresh food</h5>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="about-section__card">
              <span className="about-section__card__icon">
                <IoIosCheckmarkCircle />
              </span>
              <div className="about-section__card__text">
                <h5>fast delivery</h5>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="about-section__card">
              <span className="about-section__card__icon">
                <IoIosCheckmarkCircle />
              </span>
              <div className="about-section__card__text">
                <h5>unlimites order</h5>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <div className="about-section__photo">
            <img src={Img} alt="" />
            <div className="about-section__review">
              <h3>3K+</h3>
              <p>Reviews</p>
              <div className="about-section__review__rating">
                <Rating value={5} text={false} />
              </div>
              <div className="about-section__review__images">
                <div className="about-section__review__image">
                  <img src={UserImg1} alt="" />
                </div>
                <div className="about-section__review__image">
                  <img src={UserImg2} alt="" />
                </div>
                <div className="about-section__review__image">
                  <img src={UserImg3} alt="" />
                </div>
                <div className="about-section__review__image">
                  <img src={UserImg4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
