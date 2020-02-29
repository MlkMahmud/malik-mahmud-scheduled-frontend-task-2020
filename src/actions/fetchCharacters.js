const fetchCharacters = () => (dispatch) => {
  dispatch({ type: 'LOADING' });
  fetch('https://the-one-api.herokuapp.com/v1/character', {
    headers: { Authorization: process.env.AUTHORIZATION },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } throw Error();
    })
    .then(({ docs }) => {
      dispatch({
        type: 'FETCH CHARACTERS',
        payload: docs.slice(0, 20),
      });
    })
    .finally(() => dispatch({ type: 'LOADED' }));
};


export default fetchCharacters;
