import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledMain = styled.main`
  padding: 2.5vmin;
  min-height: calc(100vh - 60px);

  @media screen and (max-width: 380px) {
    min-height: calc(100vh - 100px);
  }
`;


const Main = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
);


Main.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Main;
