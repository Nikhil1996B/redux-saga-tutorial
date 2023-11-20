export const types = {
  GET_USERS_REQUEST: "GET_USERS_REQUEST",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
};

export const getUsers = () => ({ type: types.GET_USERS_REQUEST });
export const getUsersSuccess = ({ items }) => ({
  type: types.GET_USERS_SUCCESS,
  payload: { items },
});
