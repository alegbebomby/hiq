import { Box, Badge } from "@chakra-ui/react";
import React from "react";

export const MostCountView = ({ data }: any) => {
    return (
      <Box>
        Word count:{" "}
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          {" "}
          {data}
        </Badge>{" "}
      </Box>
    );
  };