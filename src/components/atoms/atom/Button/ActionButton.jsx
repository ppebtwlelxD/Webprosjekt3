import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles';

export const ActionButton = props => {
  const { onClick, brand, text, className } = props;
  return (
    <button className={cn(styles.ActionButton, styles['btn'], styles[`btn-${brand}`], className)} onClick={onClick}>{text}</button>
  );
};

ActionButton.propTypes = {
  onClick: PropTypes.func,
  brand: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};

export default ActionButton;


