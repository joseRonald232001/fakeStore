import { jwtDecode } from "jwt-decode";
import { requestWithPermission } from "./axios";

const GetASingleUser = async (userId) => {
  try {
    const res = await requestWithPermission.get(`/users/${userId}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        "Failed to fetch user: " +
          (error.response.data.message || "User not found.")
      );
    } else if (error.request) {
      throw new Error("Network Error: Unable to reach the server.");
    } else {
      throw new Error("Error: " + error.message);
    }
  }
};

const getUserIdFromStorage = () => {
  const token = localStorage.getItem("userfakeStore");
  const id = token ? jwtDecode(token) : false;
  return id
};

export { GetASingleUser, getUserIdFromStorage };
