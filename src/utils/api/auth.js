import { requestWithPermission } from "./axios";

const AuthUser = async (body) => {
  try {
    const res = await requestWithPermission.post("/auth/login", body);
    const token = res.data.token;
    return token;
  } catch (error) {
    let errorMessage = "";

    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = "Please check your input data.";
          break;
        case 401:
          errorMessage = "Invalid credentials.";
          break;
        case 404:
          errorMessage = "The requested resource could not be found.";
          break;
        case 500:
          errorMessage = "Server Error: Please try again later.";
          break;
        default:
          errorMessage = "An unexpected error occurred: " + error.response.data.message;
      }
    } else if (error.request) {
      errorMessage = "Network Error: No response received from the server.";
    } else {
      errorMessage = "Error: " + error.message;
    }

    throw new Error(errorMessage);
  }
};

export { AuthUser };
