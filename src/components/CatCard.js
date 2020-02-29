import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';
import CardImage from './CardImage';
import CardText from './CardText';


const Wrapper = styled.div`
  padding: 0 20px;
`;

const CatCard = ({ cat }) => {
  const {
    name, url, temperament, lifeSpan, childFriendly, dogFriendly, sheddingLevel,
  } = cat;
  return (
    <Card>
      <CardImage
        name={name}
        image={url}
      />
      <Wrapper>
        <CardText
          field="Breed Name"
          value={name}
        />
        <CardText
          field="Temperament"
          value={temperament}
        />
        <CardText
          field="Life Span"
          value={lifeSpan}
        />
        <CardText
          field="Child Friendly"
          value={childFriendly}
        />
        <CardText
          field="Dog Friendly"
          value={dogFriendly}
        />
        <CardText
          field="Shedding Level"
          value={sheddingLevel}
        />
      </Wrapper>
    </Card>
  );
};


CatCard.propTypes = {
  cat: PropTypes.shape().isRequired,
};


export default CatCard;
