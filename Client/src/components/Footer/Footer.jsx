import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <Link to="/" className="footer__logo">
            <MdRestaurantMenu />
          </Link>
          <p className="footer__address">
            - Address - <br />
            <span>297 , 1st Floor, Bazargate Street, Fort</span>
          </p>
          <div className="footer__media">
            <a href="/" className="footer__link">
              <FaFacebookF />
            </a>
            <a href="/" className="footer__link">
              <FaTwitter />
            </a>
            <a href="/" className="footer__link">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <p className="footer__copyright">Copyright &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
