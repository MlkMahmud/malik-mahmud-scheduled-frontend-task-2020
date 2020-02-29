import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';
import CardText from './CardText';


const Wrapper = styled.div`
  padding: 0 20px;
`;


const CharacterCard = ({ character }) => {
  const {
    name, race, birth, realm, death, wikiUrl,
  } = character;
  return (
    <Card>
      <Wrapper>
        <CardText
          field="Name"
          value={name}
        />
        <CardText
          field="Race"
          value={race}
        />
        <CardText
          field="Birth"
          value={birth}
        />
        <CardText
          field="Realm"
          value={realm}
        />
        <CardText
          field="Death"
          value={death}
        />
        <p>
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            More...
          </a>
        </p>
      </Wrapper>
    </Card>
  );
};


CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    realm: PropTypes.string.isRequired,
    death: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
  }).isRequired,
};


export default CharacterCard;
