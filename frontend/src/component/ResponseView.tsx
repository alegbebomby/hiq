import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { FileUploadResponse } from "../types";
import { FileDataView } from "./FileDataView";
import { MostCountView } from "./MostCountView";
import { MostWordView } from "./MostWordView";

export const ResponseView = (response: FileUploadResponse) => {
    return (
      <Box>
        <Box>Summary</Box>
        <Box>
          <MostWordView data={response?.maxWord?.word} />
          <MostCountView data={response.maxWord.count} />
        </Box>
        <SimpleGrid columns={2} minChildWidth="400px" spacing={10}>
          <FileDataView
            title="File Uploaded"
            data={response?.fileText as string}
          />
          <FileDataView title="New Text" data={response?.newText as string} />
        </SimpleGrid>
      </Box>
    );
  };