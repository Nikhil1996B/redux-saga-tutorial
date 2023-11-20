import axios from "axios";

export const users = () =>
  axios("/users", {
    params: {
      limit: 1000,
    },
  });
