import { OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { HStack } from "../styled/Core";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDebounce } from "../hooks/debounce";
import { useProductsBySearchKeyword } from "../hooks/products";

//css
const NavContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SiteLogo = styled.h3`
  font-size: 1.5rem;
`;
const SearchInput = styled(OutlinedInput)`
  outline: none;
  width: 35rem;
  height: 2.5rem;
  margin-left: 10rem;
  margin-right: auto;
  .MuiOutlinedInput-notchedOutline {
    border-radius: 0.8rem;
  }
`;
const HighlightLogo = styled.span`
  color: #ff007f;
`;

const NavLink = styled.p`
  color: rgb(107 114 128);
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const subNavLinks = [
  {
    name: "Store",
    icon: null,
  },
  {
    name: "Account",
    icon: null,
  },
  { name: "Wishlist", icon: null },
  { name: "Basket", icon: <ShoppingBasketIcon /> },
];

export const Header = ({ productsRefetch }) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 1500);
  //getting products from search keyword
  useProductsBySearchKeyword(debouncedValue);

  const handleSearchInputChange = (e) => {
    if (e.target.value) setSearchValue(e.target.value);
    else {
      setSearchValue("");
      productsRefetch();
    }
  };

  return (
    <NavContainer>
      <SiteLogo>
        <HighlightLogo>M</HighlightLogo>oBoo<HighlightLogo>M</HighlightLogo>
      </SiteLogo>
      <SearchInput
        type="search"
        value={searchValue}
        onChange={handleSearchInputChange}
        placeholder={"What do you want to buy today?"}
        endAdornment={<SearchIcon />}
      />
      <HStack gap={"2.5rem"}>
        {subNavLinks.map(({ name, icon }) => {
          return (
            <NavLink>
              {name}
              {icon}
            </NavLink>
          );
        })}
      </HStack>
    </NavContainer>
  );
};
