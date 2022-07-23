import {
  Box,
  Stack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import HeaderContent from "../Header";

const MainContent = () => (
  <Box ml={{ base: 12, md: 12 }} transition=".3s ease">
    <HeaderContent />
    <Box as="main" bgColor={useColorModeValue("gray.100", "gray.800")}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        h="full"
        minH="96vh"
        pb="4"
      >
        <Heading fontWeight="semibold">Hi, I'm Nabil</Heading>
      </Stack>
    </Box>
  </Box>
);

export default MainContent;
