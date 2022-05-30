import { Badge, Box } from "@chakra-ui/react";
import React from "react";

export const MostWordView = ({ data }: any) => {
    return (
      <Box>
        Most words:{" "}
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          {data}
        </Badge>{" "}
      </Box>
    );
  };