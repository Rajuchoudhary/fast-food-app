import { FaFeatherAlt, FaHandHoldingUsd } from 'react-icons/fa';
import { IoHelpBuoySharp } from 'react-icons/io5';
import Break from '../../assets/imgae/break.png';
import { ReactComponent as ChefImg } from '../../assets/svg/chef.svg';
import { ReactComponent as Fresh } from '../../assets/svg/fresh.svg';
import { ReactComponent as Order } from '../../assets/svg/order.svg';
import { ReactComponent as Scooter } from '../../assets/svg/scooter.svg';
import { LinkButtonGreen } from '../../components/LinkButton/LinkButton';
import useTitle from '../../hooks/useTitle';
import './ServicesPage.scss';

const ServicesPage = () => {
  useTitle('Service Page');

  return (
    <div className="services-page">
      <div className="services-page__container">
        <section className="services-page__section-1">
          <div className="services-page__section-1--img">
            <ChefImg />
          </div>
          <div className="services-page__section-1__detail">
            <h2 className="services-page__title">
              fresh food & <br /> fast delivery
            </h2>
            <p>
              Want a delicious meal, but not time, we will deliver it hot and
              yummy in 30 minutes.
            </p>
            <LinkButtonGreen btnLink="/menu" btnText="order now" />
          </div>
        </section>
        <section className="services-page__section-2">
          <h2 className="services-page__title">memories delivered</h2>

          <div className="services-page__section-2__cards">
            <div className="services-page__section-2__card">
              <h5 className="services-page__section-2__card__title">
                Delivered in 30 min.
              </h5>
              <div className="services-page__section-2__card__img">
                <Scooter />
              </div>
            </div>
            <div className="services-page__section-2__card">
              <h5 className="services-page__section-2__card__title">
                Limitless order
              </h5>
              <div className="services-page__section-2__card__img">
                <Order />
              </div>
            </div>
            <div className="services-page__section-2__card">
              <h5 className="services-page__section-2__card__title">
                Fresh & delicious
              </h5>
              <div className="services-page__section-2__card__img">
                <Fresh />
              </div>
            </div>
          </div>
        </section>
        <section className="services-page__section-3">
          <div className="services-page__section-3__left">
            <div className="services-page__section-3__text">
              <h2 className="services-page__title">our mission</h2>
              <p>
                Food ordering and delivery is a new online business idea which
                has evolved with technology.
              </p>
            </div>
            <div className="services-page__section-3__img">
              <img src={Break} alt="" />
            </div>
          </div>
          <div className="services-page__section-3__right">
            <div className="services-page__section-3__card">
              <h5 className="services-page__section-3__card__header">
                <span>
                  <IoHelpBuoySharp />
                </span>
                help
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="services-page__section-3__card">
              <h5 className="services-page__section-3__card__header">
                <span>
                  <FaHandHoldingUsd />
                </span>
                save
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="services-page__section-3__card">
              <h5 className="services-page__section-3__card__header">
                <span>
                  <FaFeatherAlt />
                </span>
                eat
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
