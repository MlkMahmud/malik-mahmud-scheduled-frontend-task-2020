import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
  margin: 20px auto;
  width: fit-content;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .4);
  background: ghostwhite;
`;


const Pagination = ({ children }) => (
  <Container>
    {children}
  </Container>
);


Pagination.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Pagination;
