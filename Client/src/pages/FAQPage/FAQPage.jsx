import useTitle from '../../hooks/useTitle';
import Accordian from './Accordian';
import './FAQPage.scss';
const FAQPage = () => {
  useTitle('FAQ');
  return (
    <div className="faq-page">
      <div className="faq-page__container">
        <h1 className="faq-page__heading">Frequently Asked Questions</h1>
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
      </div>
    </div>
  );
};

export default FAQPage;
