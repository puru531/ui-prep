// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // your combined reducers

const store = createStore(rootReducer);

export default store;
