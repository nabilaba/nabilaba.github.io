import { Box, useColorModeValue, useColorMode } from "@chakra-ui/react";
import FooterContent from "../../components/Footer";
import MainContent from "../../components/Main";
import SidebarContent from "../../components/Sidebar";
const BaseOutlet = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <MainContent />
      <FooterContent />
    </Box>
  );
};

export default BaseOutlet;
