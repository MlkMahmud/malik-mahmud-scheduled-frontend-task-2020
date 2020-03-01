/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-left: 1px solid #f1f1f1;
  background: none;
  cursor: pointer;
  
  &:hover {
    background-color: #000;
    color: #f8f8ff;
  }
`;


const PaginationButton = ({ value, handleClick }) => (
  <Button onClick={handleClick}>
    {value}
  </Button>
);

PaginationButton.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};


export default PaginationButton;
