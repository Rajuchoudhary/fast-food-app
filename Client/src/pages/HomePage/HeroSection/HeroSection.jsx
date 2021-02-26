import HeroImg from '../../../assets/imgae/hero.png';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__left">
          <p className="hero-section__tag">one stop</p>
          <h1 className="hero-section__title">
            Order Healthy & Fresh Food anytime
          </h1>
          <p className="hero-section__description">
            Just confirm your order and enjoy our delicious fastest delivery
          </p>
          <div className="hero-section__order">
            <a href="/#menu" className="link-btn link-btn__green">
              Order Now
            </a>
            <p>Delivery in just 30 min*</p>
          </div>
        </div>
        <div className="hero-section__right">
          <img
            src={HeroImg}
            alt="fast food hero item"
            className="hero-section__img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
