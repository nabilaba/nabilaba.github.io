import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const FooterContent = () => (
  <Flex
    pos="fixed"
    bottom="0"
    zIndex="2"
    w="full"
    as="footer"
    h="25px"
    bg={useColorModeValue("gray.200", "gray.900")}
    align="center"
    spacing={1}
    px={2}
    justifyContent="space-between"
  >
    <HStack spacing={1} h="full">
      <FooterItem icon="codicon codicon-git-branch" label="main*" />
      <FooterItem icon="codicon codicon-cloud-upload" />
      <FooterItem
        icon="codicon codicon-error"
        label="0"
        icon2="codicon codicon-warning"
        label2="0"
      />
      <FooterItem label="Git Graph" />
    </HStack>
    <HStack spacing={1} h="full">
      <FooterItem label="Javascript" label2="React" />
      <FooterItem icon="codicon codicon-smiley" />
    </HStack>
  </Flex>
);

const FooterItem = ({ icon, icon2, label, label2 }) => (
  <HStack
    color={useColorModeValue("gray.800", "gray.400")}
    spacing={1}
    align="center"
    role="group"
    h="full"
    fontSize={".55rem"}
    cursor="pointer"
    w="max-content"
    _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
    p={1}
  >
    {icon && <Text as="span" className={icon} style={{ fontSize: ".75rem" }} />}
    {label && <Text>{label}</Text>}
    {icon2 && (
      <Text as="span" className={icon2} style={{ fontSize: ".75rem" }} />
    )}
    {label2 && <Text>{label2}</Text>}
  </HStack>
);

export default FooterContent;
