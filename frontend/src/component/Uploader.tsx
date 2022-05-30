import * as React from "react";
import axios from "axios";
import {
  Box,
  Text,
  Input,
  Button,
  SimpleGrid,
  Heading,
  FormHelperText,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Stack,
  Badge,
  Container,
} from "@chakra-ui/react";
import { FileUploadResponse } from "../types";
import { ResponseView } from "./ResponseView";

export interface FileDataViewData {
  title: string;
  data: string;
}
export const FileUploader = () => {
  const inputRef = React.useRef<HTMLFormElement | null>(null)
  const [selectedFile, setSelectedFile] = React.useState<File>();
  const [error, setError] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [responseData, setResponseData] = React.useState<FileUploadResponse>();
  const onFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = async (e: any) => {
    e.preventDefault()
    const formData = new FormData();
    if (!selectedFile) {
      console.log("got here");
      setError("Please choose a file");
      setIsError(true);
      return;
    }
    formData.append("file", selectedFile, selectedFile?.name);
    const response = await axios.post("http://localhost:3010/upload", formData);
    setResponseData(response.data);
    setSelectedFile(undefined)
    setIsError(false)
    setError('')
    inputRef?.current?.reset();
  };

  return (
    <Container textAlign="left" fontSize="xl">
      <Box>
        <Box textAlign="center" fontSize="xl">
          <Heading> HiQ File Processor</Heading>
          <Text> Please upload your file</Text>
        </Box>
        {error !== "" ? <Box> {error}</Box> : null}
        <Stack spacing={4}>
          <form onSubmit={onFileUpload} ref={inputRef}>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="file">File Upload</FormLabel>
            <input id="file" type="file" onChange={onFileChange}  />
            {!isError ? (
              <FormHelperText>Please upload your file here</FormHelperText>
            ) : (
              <FormErrorMessage>File required</FormErrorMessage>
            )}
          </FormControl>
            
          <Button onClick={onFileUpload} >UploadFile!</Button>
          </form>
        </Stack>
        {responseData && <ResponseView {...responseData} />}
      </Box>
    </Container>
  );
};
