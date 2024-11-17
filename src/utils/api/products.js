import { requestWithoutPermission } from "./axios";

const getAllProducts = async () => {
  try {
    const response = await requestWithoutPermission.get("/products");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching all products:", error);
    return { success: false, message: "Error fetching all products" };
  }
};

const getProductById = async (id) => {
  try {
    const response = await requestWithoutPermission.get(`/products/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return { success: false, message: `Error fetching product with ID ${id}` };
  }
};

const getProductByCategory = async (category) => {
  try {
    const response = await requestWithoutPermission.get(
      `/products/category/${category}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return {
      success: false,
      message: `Error fetching products in category ${category}`,
    };
  }
};

const categories = [
  {
    alias: "all",
    name: "all",
  },
  {
    alias: "electronics",
    name: "electronics",
  },
  {
    alias: "jewelery",
    name: "jewelery",
  },
  {
    alias: "men",
    name: "men's clothing",
  },
  {
    alias: "woman",
    name: "women's clothing",
  },
];

export { getAllProducts, getProductById, getProductByCategory };
export default categories;
