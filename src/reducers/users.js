import { types } from "../actions/users";

const INITIAL_STATE = {
  items: [],
};
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
}
