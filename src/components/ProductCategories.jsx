import React, { useState } from "react";
import { useProductCategories, useProductsByCategory } from "../hooks/products";
import Select from "react-select";

export const ProductCategories = ({ productsRefetch }) => {
  const [categoryName, setCategoryName] = useState(null);
  //getting products by categoryName
  useProductsByCategory(categoryName ? categoryName.value : null);
  //getting product categories
  const { data: categories } = useProductCategories();
  if (categories && categories.length > 0)
    return (
      <Select
        defaultValue={categoryName}
        onChange={(value) => {
          if (value) setCategoryName(value);
          else productsRefetch();
        }}
        options={categories}
        placeholder={'Select Category'}
        autosize
        isClearable
        styles={{
          control: (baseStyles, { isFocused }) => ({
            ...baseStyles,
            width: "20.75rem",
            marginBottom: "1.5rem",
            outline: "none",
            border: "1px solid #e5e7eb",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #e5e7eb",
            },
            borderRadius: "1rem",
          }),
          menu: (base) => ({
            ...base,
            width: "20.75rem",
          }),
          menuList: (base) => ({
            ...base,
            borderRadius: "1rem",
            "::-webkit-scrollbar": {
              width: "0.4rem",
            },
            "::-webkit-scrollbar-track": {
              background: "#ededed",
            },
            "::-webkit-scrollbar-thumb": {
              background: "grey",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#3b3b3b",
            },
          }),
          option: (base, { isFocused, isSelected }) => {
            return {
              ...base,
              ...((isFocused || isSelected) && {
                background: "#3b3b3b",
                color: "#ffffff",
              }),
            };
          },
        }}
      />
    );
};

/*
const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };
   <select label={'category'} value={categoryName} onChange={handleCategoryChange}>
      {categories.map((category) => {
        return <option key={category.slug} value={category.slug}>{category.name}</option>;
      })}
    </select>
*/
