import { useQuery, useQueryClient } from "react-query";
import productService from "../services/products";

export const useProducts = () => {
  return useQuery(["products"], () => productService.getProducts());
};

export const useProductCategories = () => {
  return useQuery(
    ["product_categories"],
    () => productService.getProductCategories(),
    {
      select: (data) => {
        data = data.map(({ slug, name }) => {
          return {
            label: name,
            value: slug,
          };
        });
        return data;
      },
    }
  );
};

export const useProductsByCategory = (categoryName) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["products", categoryName],
    () => productService.getProductsBasedOnCategory(categoryName),
    {
      enabled: !!categoryName,
      onSuccess: (data) => {
        queryClient.setQueryData("products", () => {
          return { ...data };
        });
      },
    }
  );
};

export const useProductsBySearchKeyword = (searchKeyword) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["products", searchKeyword],
    () => productService.getProductsBySearchKeyword(searchKeyword),
    {
      enabled: !!searchKeyword,
      onSuccess: (data) => {
        queryClient.setQueryData("products", () => {
          return { ...data };
        });
      },
    }
  );
};
