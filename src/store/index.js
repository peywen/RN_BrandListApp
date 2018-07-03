import { createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import listBrand from '../reducer/brandReducer';
import listBrand from '../reducer';

// const store = createStore(listBrand);
const store = createStore(listBrand, applyMiddleware(thunk));
export default store;
