import { requestWithPermission } from "./axios";

const postItemToCart = async (userId, itemId) => {
  const body = {
    userId: userId,
    date: "2020 - 02 - 03",
    products: [{ productId: itemId, quantity: 1 }],
  };

  try {
    const res = await requestWithPermission.post(`/carts`, body);
    const successMessage = {
      message: "Item added to cart successfully",
      data: res.data,
    };
    return successMessage;
  } catch (error) {
    if (error.response) {
      console.error(
        "Error adding item to cart:",
        error.response.data.message || "An error occurred"
      );
      throw new Error(
        "Failed to add item to cart: " +
          (error.response.data.message || "Please try again.")
      );
    } else if (error.request) {
      console.error("Network Error: No response received from the server.");
      throw new Error("Network Error: Unable to reach the server.");
    } else {
      console.error("Error:", error.message);
      throw new Error("Error: " + error.message);
    }
  }
};

const getCartItems = async (userId) => {
  try {
    const res = await requestWithPermission.get(`/carts/user/${userId}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "Error fetching cart items:",
        error.response.data.message || "An error occurred"
      );
      throw new Error(
        "Failed to fetch cart items: " +
          (error.response.data.message || "User not found.")
      );
    } else if (error.request) {
      console.error("Network Error: No response received from the server.");
      throw new Error("Network Error: Unable to reach the server.");
    } else {
      console.error("Error:", error.message);
      throw new Error("Error: " + error.message);
    }
  }
};

const removeItemFromCart = async (userId, itemId) => {
  try {
    const res = await requestWithPermission.delete(
      `/carts/${userId}/items/${itemId}`
    );
    const successMessage = {
      message: "Item removed from cart successfully",
      data: res.data,
    };
    return successMessage;
  } catch (error) {
    if (error.response) {
      console.error(
        "Error removing item from cart:",
        error.response.data.message || "An error occurred"
      );
      throw new Error(
        "Failed to remove item from cart: " +
          (error.response.data.message || "Please try again.")
      );
    } else if (error.request) {
      console.error("Network Error: No response received from the server.");
      throw new Error("Network Error: Unable to reach the server.");
    } else {
      console.error("Error:", error.message);
      throw new Error("Error: " + error.message);
    }
  }
};

export { postItemToCart, getCartItems, removeItemFromCart };
