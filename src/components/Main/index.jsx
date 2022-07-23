import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Home from "../../pages/Home";
import HeaderContent from "../Header";

const MainContent = () => (
  <Box ml={{ base: 12, md: 12 }} transition=".3s ease">
    <HeaderContent />
    <Box as="main" bgColor={useColorModeValue("gray.100", "gray.800")}>
        <Home />
    </Box>
  </Box>
);

export default MainContent;
