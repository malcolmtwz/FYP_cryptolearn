import React from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import ArrowIcon from '../../ArrowIcon/ArrowIcon';
import './NavigationButton.css';

function NavigationButton({ to, text }) {
  return (
    <Link to={to} className="navigation-button">
      <ArrowIcon />
      <span>{text}</span>
    </Link>
  );
}

NavigationButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavigationButton;