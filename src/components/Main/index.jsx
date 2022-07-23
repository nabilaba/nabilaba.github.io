import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import HeaderContent from "../Header";
import { Outlet } from "react-router-dom";

const MainContent = () => (
  <Flex
    ml={{ base: 12, md: 12 }}
    transition=".3s ease"
    direction="column"
    h="100vh"
    pb="25px"
  >
    <HeaderContent />
    <Box as="main" bgColor={useColorModeValue("gray.100", "gray.800")} flex={1}>
      <Outlet />
    </Box>
  </Flex>
);

export default MainContent;
