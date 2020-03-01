export default (state = 1, { type, value }) => {
  switch (type) {
    case 'SET PAGE INDEX':
      return value;
    default:
      return state;
  }
};
