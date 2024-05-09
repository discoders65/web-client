import axios from "axios";

export const register = async ({ formData }) => {
  //   console.log("LAST ");
  //   console.log(formData);
  const response = await axios.post(
    "http://localhost:8081/api/v1/auth/signup",
    formData
  );
  return response.data;
};

export const login = async ({ formData }) => {
  const { data } = await axios.post(
    "http://localhost:8081/api/v1/auth/signin",
    formData
  );
  return data;
};
