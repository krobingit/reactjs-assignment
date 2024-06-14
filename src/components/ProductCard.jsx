import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardContainer = styled.div`
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  height: 22rem;
  width: 15rem;
  border-radius: 1rem;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const ProductImage = styled(LazyLoadImage)`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const ProductTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
`;

const ProductDescription = styled.p`
  color: #6f6f6f;
  font-size: 0.85rem;
  margin: 0;
  max-height: 7rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ProductInfo = styled.div`
  margin: 0;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductPrice = styled.h4`
  color: #374151;
  font-size: 1.15rem;
  margin: 0;
`;

const Favourite = styled.div`
  background-color: #8e8c89;
  width: 1.75rem;
  height: 1.75rem;
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProductCard = (props) => {
  const { product } = props;
  return (
    <CardContainer>
      <ImageContainer>
        <ProductImage src={product.images[0]} alt={"product image"} />
        <Favourite>
          <FavoriteBorderIcon fontSize="24px" style={{ color: "white" }} />
        </Favourite>
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>
          Product Description : {product.description}
        </ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
        <Rating
          name="read-only"
          value={product.rating}
          readOnly
          precision={0.1}
        />
      </ProductInfo>
    </CardContainer>
  );
};
