import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
import { useRef } from 'react';

const GoBackBtn = () => {
  const location = useLocation();
  const locationRef = useRef(location.state);
  console.log(locationRef.current);
  return (
    <Link className={css.link} to={locationRef.current ?? '/'}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
