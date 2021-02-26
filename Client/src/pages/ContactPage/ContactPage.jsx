import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import TextArea from '../../components/FormElements/TextArea/TextArea';
import useTitle from '../../hooks/useTitle';
import './ContactPage.scss';

const ContactPage = () => {
  useTitle('Contact Us');
  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__text">
          <h1>get in touch</h1>
          <p>We are here for you! how can we hlep?</p>
        </div>
        <div className="contact-page__content">
          <form
            className="contact-page__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="your full name..." />
            <Input type="email" placeholder="your email..." />
            <TextArea placeholder="your message..." />
            <Button type="submit" btnText="submit" />
          </form>
          <div className="contact-page__content__right">
            <div className="contact-page__content__text">
              <h4>opening hours</h4>
              <p>Monday - Friday</p>
              <p>Weekend</p>
              <p>11am - 2pm</p>
            </div>
            <div className="contact-page__content__text">
              <h4>address</h4>
              <p> 297 , 1st Floor,</p>
              <p>Bazargate Street,</p>
              <p>Fort, India</p>
            </div>
            <div className="contact-page__content__text">
              <h4>support</h4>
              <p>support@fastfood.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
