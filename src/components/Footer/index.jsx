import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  VscSourceControl,
  VscCloudUpload,
  VscError,
  VscWarning,
  VscSmiley,
} from "react-icons/vsc";

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
    <HStack h="full">
      <FooterItem icon={VscSourceControl} label="main*" />
      <FooterItem icon={VscCloudUpload} />
      <FooterItem icon={VscError} label="0" icon2={VscWarning} label2="0" />
      <FooterItem label="Git Graph" />
    </HStack>
    <HStack h="full">
      <FooterItem label="Javascript" label2="React" />
      <FooterItem icon={VscSmiley} />
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
    fontSize={".75rem"}
    cursor="pointer"
    w="max-content"
    _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
    p={1}
  >
    {icon && <Icon boxSize="4" as={icon} />}
    {label && <Text>{label}</Text>}
    {icon2 && <Icon boxSize="4" as={icon2} />}
    {label2 && <Text>{label2}</Text>}
  </HStack>
);

export default FooterContent;
