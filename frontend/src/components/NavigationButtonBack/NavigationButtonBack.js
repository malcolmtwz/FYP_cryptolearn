import React from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import ArrowIconBack from '../ArrowIcon/ArrowIconBack'; 
import './NavigationButtonBack.css';

function NavigationButtonBack({ to, text }) {
  return (
    <Link to={to} className="navigation-button-back">
      <ArrowIconBack />
      <span>{text}</span>
    </Link>
  );
}

NavigationButtonBack.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavigationButtonBack;