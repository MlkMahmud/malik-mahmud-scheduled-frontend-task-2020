import React from 'react';
import styled from 'styled-components';
import img from '../../public/images/gandalf-cat.jpg';


const Container = styled.div`
  text-align: center;
  font-size: 1.5rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Image = styled.img`
  max-width: 100%;
`;


export default () => (
  <Container>
    <Image src={img} alt="" />
    <p>
      Everything you ever wanted to know about your favorite Lord Of The Rings characters and, um, cats?
    </p>
  </Container>
);
