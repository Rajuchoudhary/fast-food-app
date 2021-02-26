import { ReactComponent as NotFoundImg } from '../../assets/svg/not_found.svg';
import { LinkButtonGreen } from '../../components/LinkButton/LinkButton';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <div className="not-found-page__img">
          <NotFoundImg />
        </div>
        <h1>something missing</h1>
        <p>This page is missing or you assembled the link incorrectly.</p>
        <LinkButtonGreen btnText="back to home page" />
      </div>
    </div>
  );
};

export default NotFoundPage;
