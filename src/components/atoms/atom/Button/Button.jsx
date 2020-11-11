import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles';

export const Button = props => {
  const { children, to, className } = props;
  return (
    <div className={cn(styles.button, className)}>
      <Link to={to} className={styles.buttonLink}>
        {children}
      </Link>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string
};

export default Button;
