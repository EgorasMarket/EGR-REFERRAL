import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
//   //console.log(payload, 'alert reducer');
//   //console.log(type);

  switch (type) {
    case SET_ALERT:
        // //console.log(payload, 'alert reducer');
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
