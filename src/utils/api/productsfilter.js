import { requestWithoutPermission } from "./axios";

const getProductsByCategory = async (category) => {
  try {
    const response = await requestWithoutPermission.get(
      `/products/category/${category}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching all products:", error);
    return { success: false, message: "Error fetching all products" };
  }
};

export default getProductsByCategory;
