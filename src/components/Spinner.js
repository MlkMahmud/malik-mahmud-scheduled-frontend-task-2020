import React from 'react';
import styled, { keyframes } from 'styled-components';

import spinner from '../../public/images/spinner.png';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: calc(100vh - (60px + 5vmin));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 380px) {
    height: calc(100vh - (100px + 5vmin));
  }
`;

const Spinner = styled.div`
  background: url(${spinner}) no-repeat center;
  background-size: cover;
  width: 68px;
  height: 68px;
  animation: ${rotate} .7s linear infinite;
`;


export default () => (
  <Container>
    <Spinner />
    <p>Loading...</p>
  </Container>
);
