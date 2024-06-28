import axios from "axios";

const api_url = "http://localhost:4000/users/";

const loginUser = (email, pass) => {
  return axios
    .post(api_url + "signin", {email: email, pass: pass})
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data.message);
      // return err.response.data.message;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  loginUser,
  logout,
  getCurrentUser,
};
