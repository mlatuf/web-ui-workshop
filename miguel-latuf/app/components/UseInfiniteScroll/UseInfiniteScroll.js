import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UseInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
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