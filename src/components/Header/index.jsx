import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const HeaderContent = () => (
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
);

export default HeaderContent;
