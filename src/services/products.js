import axiosInstance from "./axios";

class ProductService {
  async getProducts() {
    const response = await axiosInstance.get(`/products`);
    return response.data;
  }
  async getProductCategories() {
    const response = await axiosInstance.get(`/products/categories`);
    return response.data;
  }
  async getProductsBasedOnCategory(categoryName) {
    const response = await axiosInstance.get(
      `/products/category/${categoryName}`
    );
    return response.data;
  }
  async getProductsBySearchKeyword(searchKeyword) {
    const response = await axiosInstance.get(`/products/search`, {
      params: {
        q: searchKeyword,
      },
    });
    return response.data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
