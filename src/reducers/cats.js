export default (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH CATS':
      return [...payload];
    default:
      return state;
  }
};
