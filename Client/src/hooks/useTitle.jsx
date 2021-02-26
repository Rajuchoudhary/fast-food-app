import { useEffect } from 'react';

const useTitle = (title = '') => {
  useEffect(() => {
    document.title = `${title ? title : 'loading...'}`;
  }, [title]);
};

export default useTitle;
