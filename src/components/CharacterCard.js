import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Card = styled.div`
  background-color: #f8f8ff;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.4);
  padding: 20px;

  a {
    color: #000;
  }
`;


const CharacterCard = ({ character }) => {
  const {
    name, race, birth, realm, death, wikiUrl,
  } = character;
  return (
    <Card>
      <p>
        <b>Name:</b>
        {name}
      </p>
      <p>
        <b>Race: </b>
        {race}
      </p>
      <p>
        <b>Birth: </b>
        {birth}
      </p>
      <p>
        <b>Realm: </b>
        {realm}
      </p>
      <p>
        <b>Death: </b>
        {death}
      </p>
      <p>
        <a
          href={wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          More...
        </a>
      </p>
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
