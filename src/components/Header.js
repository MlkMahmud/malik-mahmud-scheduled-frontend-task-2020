import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5vmin;
  background: ghostwhite;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, .4);
  
  @media screen and (max-width:380px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: snow;
  background: #000;
  padding: 10px 20px; 

  @media screen and (max-width:380px) {
    margin-bottom: 10px;
  }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
  margin: 0 15px;
`;


export default () => (
  <Header>
    <Logo
      to="/"
      aria-label="homepage"
    >
      lotr + cats
    </Logo>
    <nav>
      <NavLink to="/cats">cats</NavLink>
      <NavLink
        to="/lotr"
        aria-label="the lord of the rings"
      >
        lotrs
      </NavLink>
    </nav>
  </Header>
);
