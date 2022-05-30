import { Box, Heading,Text } from "@chakra-ui/react";
import React from "react";
import { FileDataViewData } from "./Uploader";

export const FileDataView = ({ title, data }: FileDataViewData) => {
    return (
      <Box padding='10px' borderWidth='1px' borderRadius='lg' borderColor='green'>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{data}</Text>
      </Box>
    );
};