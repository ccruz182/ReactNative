import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE
} from "./actionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

export const deletePlace = _id => {
  return {
    type: DELETE_PLACE,
    _id: _id
  }
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    key: key
  }
};

export const unselectPlace = () => {
  return {
    type: UNSELECT_PLACE
  }
}
