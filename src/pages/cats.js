import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchCats from '../actions/fetchCats';
import CatCard from '../components/CatCard';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';


const Cats = ({ dispatch, cats, loading }) => {
  useEffect(() => {
    dispatch(fetchCats(1));
  }, []);

  if (loading) {
    return (
      <Spinner />
    );
  }
  return (
    <Grid>
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
        />
      ))}
    </Grid>
  );
};


Cats.propTypes = {
  cats: PropTypes.arrayOf().isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = ({ loading, cats }) => ({
  loading,
  cats,
});


export default connect(mapStateToProps)(Cats);
