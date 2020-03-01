import { combineReducers } from 'redux';

import cats from './cats';
import characters from './characters';
import loading from './loading';
import pageIndex from './pageIndex';

export default combineReducers({
  cats,
  characters,
  loading,
  pageIndex,
});
