import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledCard = styled.div`
  background-color: #f8f8ff;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.4);
  height: ${(props) => props.cardHeight || 'auto'};

  a {
    color: #000;
  }
`;


const Card = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);


Card.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Card;
