import React from "react";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import {small,medium} from "../utils/responsive"
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  ${small({justifyContent:"center"})}
   ${medium({justifyContent:"center"})}
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const Products = ({ products }) => {
  if (products.length === 0) {
    return <ProductImage src={"/no-product-found.jpg"} />;
  } else {
    return (
      <ProductsContainer>
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </ProductsContainer>
    );
  }
};
