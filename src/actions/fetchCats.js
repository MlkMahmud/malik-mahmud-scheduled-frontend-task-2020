/* eslint-disable camelcase */
/* eslint-disable no-await-in-loop */
const fetchCats = async (index) => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds?limit=5&page=${index}`, {
    headers: { 'x-api-key': process.env.API_KEY },
  });

  if (response.ok) {
    return response.json();
  } throw new Error();
};


const fetchCatImages = async (cats = []) => {
  const images = [];
  const len = cats.length;

  for (let i = 0; i < len; i += 1) {
    const { id } = cats[i];
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, {
      headers: { 'x-api-key': process.env.API_KEY },
    });
    const [cat] = await response.json();
    const {
      name, life_span, dog_friendly, child_friendly, shedding_level, temperament,
    } = cat.breeds[0];
    images.push({
      url: cat.url,
      name,
      temperament,
      sheddingLevel: shedding_level,
      childFriendly: child_friendly,
      dogFriendly: dog_friendly,
      lifeSpan: life_span,
    });
  }
  return images;
};


export default (index) => async (dispatch) => {
  try {
    dispatch({ type: 'LOADING' });
    const cats = await fetchCatImages(await fetchCats(index));
    dispatch({
      type: 'FETCH CATS',
      payload: cats,
    });
  } catch (err) {
    dispatch({ type: 'ERROR' });
  } finally {
    dispatch({ type: 'LOADED' });
  }
};
