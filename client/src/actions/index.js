import axios from "axios";

export const submitEmail = (values, history) => async dispatch => {
  const res = await axios.post("/api/emails", values);

  history.push("/");
};
