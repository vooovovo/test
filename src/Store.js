import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer'
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducer: userReducer,
    productReducer: productReducer,
});

// persist store code
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };
  
  const persistedState = loadState();
  
  // This persistedState is includedat the time of store creation as initial value
  const configureStore = createStore(rootReducer, persistedState);
  
  // This is actually call every time when store saved
  configureStore.subscribe(() => {
    saveState(configureStore.getState());
  });
  

export default configureStore;