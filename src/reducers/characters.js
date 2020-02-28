export default (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH CHARACTERS':
      return [...payload];
    default:
      return state;
  }
};
