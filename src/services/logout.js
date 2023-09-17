import axios from "axios";
export const logIn = async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return;
  }
};
