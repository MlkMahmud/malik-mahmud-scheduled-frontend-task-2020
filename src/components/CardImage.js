import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Image = styled.img`
  max-width: 100%;
`;


const CardImage = ({ image, name }) => (
  <div>
    <Image src={image} alt={`${name} cat`} />
  </div>
);


CardImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


export default CardImage;
