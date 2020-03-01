import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;


const Grid = ({ children }) => (
  <StyledGrid>
    {children}
  </StyledGrid>
);


Grid.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.node.isRequired,
  ).isRequired,
};


export default Grid;
