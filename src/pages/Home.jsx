import React, { createContext } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { useProducts } from "../hooks/products";
import { Products } from "../components/Products";
import GlobalLoader from "../components/GlobalLoader";
import { ProductCategories } from "../components/ProductCategories";

//css
const HomeContainer = styled.div`
  padding: 0.5rem 3rem 1rem 3rem;
`;
const AdContainer = styled.div`
  background-image: linear-gradient(
    to right,
    #3b3b3b,
    #3f3d40,
    #453e44,
    #4c3f45,
    #544044,
    #5f4246,
    #694546,
    #734845,
    #844c48,
    #95504c,
    #a6544f,
    #b75852
  );
  width: 95%;
  height: fit-content;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const AdHeading = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0;
`;
const AdText = styled.p`
  color: white;
  font-size: 1.25rem;
  margin-top: 10px;
`;

export const GlobalContext = createContext({});

export const Home = () => {
  const { data: products, refetch: productsRefetch, isLoading } = useProducts();
  
  return (
    <GlobalContext.Provider>
      <HomeContainer>
        <Header productsRefetch={productsRefetch} />
        <AdContainer>
          <AdHeading>Lorem Ipsum</AdHeading>
          <AdText>
            Slash sales begins in June. Get 80% Discount on all products.{" "}
            <strong>Read More</strong>
          </AdText>
        </AdContainer>
        <ProductCategories productsRefetch={productsRefetch} />
        <GlobalLoader />
        {products?.products && (
          <Products products={products?.products} productsLoading={isLoading} />
        )}
      </HomeContainer>
    </GlobalContext.Provider>
  );
};
