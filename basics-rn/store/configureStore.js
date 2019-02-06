import { createStore, combineReducers } from "redux";

import placesReducer from "./reducers/places";

const rootReducer = combineReducers({ places: placesReducer });

const configuredStore = () => {
  return createStore(rootReducer);
};

export default configuredStore;
