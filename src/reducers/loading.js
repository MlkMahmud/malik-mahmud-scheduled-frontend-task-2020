export default (state = false, { type }) => {
  switch (type) {
    case 'LOADING':
      return true;
    case 'LOADED':
      return false;
    default:
      return state;
  }
};
