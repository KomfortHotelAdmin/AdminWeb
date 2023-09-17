import axios from "axios";
axios.defaults.baseURL = "https://komfort-hotel-admin-backend.onrender.com/api";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logIn = async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);

    data?.token && token.set(data.token);
    return data;
  } catch (error) {
    return;
  }
};

export const logOut = async () => {
  try {
    const data = await axios.post("/auth/logout");
    return data;
  } catch (error) {
    return;
  }
};
