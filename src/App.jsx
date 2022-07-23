import {
  Box,
  Flex,
  Stack,
  Heading,
  useColorModeValue,
  useColorMode,
  Text,
  HStack,
} from "@chakra-ui/react";
import SidebarContent from "./components/Sidebar";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
    >
      <SidebarContent colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Box ml={{ base: 12, md: 12 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.900")}
          h="4vh"
          position="sticky"
          top="0"
        >
          <Text align="center">nabilaba.github.io</Text>
        </Flex>
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
      <HStack
        pos="fixed"
        bottom="0"
        zIndex="2"
        w="full"
        px="2"
        as="footer"
        h="25px"
        bg={useColorModeValue("gray.200", "gray.900")}
        align="center"
      >
        <Text fontSize="13px" color="gray.500">
          © 2020 Nabil. All rights reserved.
        </Text>
      </HStack>
    </Box>
  );
}