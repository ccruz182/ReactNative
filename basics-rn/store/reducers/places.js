import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  placeSelected: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return { ...state, places: state.places.concat(action.placeName) };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((el, i) => i !== action._id),
        placeSelected: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        placeSelected: state.places.find((places, i) => i === action.key)
      };
    case UNSELECT_PLACE:
      return {
        ...state,
        placeSelected: null
      };
    default:
      return state;
  }
};

export default reducer;
