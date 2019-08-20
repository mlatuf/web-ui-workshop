import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UseInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ac.abort();
    }
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    if (!isFetching) {
      ac.abort();
      return;
    };
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

UseInfiniteScroll.propTypes = {
  callback: PropTypes.func
}

export default UseInfiniteScroll;