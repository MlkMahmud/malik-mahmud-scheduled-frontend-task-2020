import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchCats from '../actions/fetchCats';
import CatCard from '../components/CatCard';
import Grid from '../components/Grid';
import Pagination from '../components/Pagination';
import PaginationButton from '../components/PaginationButton';
import Spinner from '../components/Spinner';


const pages = Array(5); // Creating only 5 pages for this exaample
pages.fill(0);

const Cats = ({
  dispatch, cats, loading, pageIndex,
}) => {
  useEffect(() => {
    dispatch(fetchCats(pageIndex));
  }, [pageIndex]);

  if (loading) {
    return (
      <Spinner />
    );
  }
  return (
    <>
      <Grid>
        {cats.map((cat) => (
          <CatCard
            key={cat.name}
            cat={cat}
          />
        ))}
      </Grid>
      <Pagination>
        {pages.map((_, num) => (
          <PaginationButton
            key={num}
            value={num + 1}
            handleClick={() => dispatch({
              type: 'SET PAGE INDEX',
              value: num + 1,
            })}
          />
        ))}
      </Pagination>
    </>
  );
};


Cats.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
};


const mapStateToProps = ({ loading, cats, pageIndex }) => ({
  loading,
  cats,
  pageIndex,
});


export default connect(mapStateToProps)(Cats);
