import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { useIsFetching } from "react-query";
import { HStack } from "../styled/Core";

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (!isFetching) {
    return null;
  }

  return (
    <HStack>
      <RotatingLines
        visible={true}
        height="75"
        width="75"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </HStack>
  );
};

export default GlobalLoader;
