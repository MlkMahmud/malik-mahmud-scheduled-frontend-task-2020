import React from 'react';
import PropTypes from 'prop-types';


const CardText = ({ field, value }) => (
  <p>
    <b>{`${field}:${' '}`}</b>
    {value}
  </p>
);


CardText.defaultProps = {
  value: '',
};


CardText.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};


export default CardText;
