import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '../components/Grid';
import CharacterCard from '../components/CharacterCard';
import fetchCharacters from '../actions/fetchCharacters';


const Characters = ({ characters, dispatch }) => {
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);
  return (
    <Grid>
      {characters.map((character) => (
        <CharacterCard
          key={character._id}
          character={character}
        />
      ))}
    </Grid>
  );
};


Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      race: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
      realm: PropTypes.string.isRequired,
      death: PropTypes.string.isRequired,
      wikiUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = ({ characters }) => ({
  characters,
});


export default connect(mapStateToProps)(Characters);
