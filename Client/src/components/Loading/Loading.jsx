import { BiLoaderCircle } from 'react-icons/bi';
import './Loading.scss';

const Loading = ({ big = false }) => {
  return (
    <span
      className="loading"
      style={{
        fontSize: `${big ? '7rem' : ''}`,
        color: `${big ? 'var(--black)' : 'var(--white)'}`,
      }}
    >
      <BiLoaderCircle />
    </span>
  );
};

export default Loading;
