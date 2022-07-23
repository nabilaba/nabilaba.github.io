import { HStack, Text, useColorModeValue } from "@chakra-ui/react";

const FooterContent = () => (
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
);

export default FooterContent;
