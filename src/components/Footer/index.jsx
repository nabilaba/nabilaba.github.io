import {
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  VscSourceControl,
  VscRepoForked,
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
      <FooterItem
        icon={VscSourceControl}
        label="main*"
        labelTooltip="nabilaba.github.io (Git)"
        url="https://github.com/nabilaba/nabilaba.github.io"
      />
      <FooterItem
        icon={VscRepoForked}
        labelTooltip="Fork This"
        url="https://github.com/nabilaba/nabilaba.github.io/fork"
      />
      <FooterItem
        icon={VscError}
        label="0"
        icon2={VscWarning}
        label2="0"
        labelTooltip="No Problems"
      />
      <FooterItem
        label="Git Graph"
        labelTooltip="View Git Graph"
        url="https://github.com/nabilaba/nabilaba.github.io/commits/main"
      />
    </HStack>
    <HStack h="full">
      <FooterItem
        label="Javascript"
        label2="React"
        labelTooltip="Language Mode"
      />
      <FooterItem icon={VscSmiley} />
    </HStack>
  </Flex>
);

const FooterItem = ({ icon, icon2, label, label2, labelTooltip, url }) => (
  <Tooltip label={labelTooltip}>
    <HStack
      onClick={() => {
        if (url) {
          window.open(url, "_blank");
        }
      }}
      color={useColorModeValue("gray.800", "gray.400")}
      spacing={1}
      align="center"
      role="group"
      h="full"
      fontSize={".75rem"}
      cursor="pointer"
      w="max-content"
      _hover={{
        bg: useColorModeValue("gray.100", "gray.800"),
      }}
      p={1}
    >
      {icon && <Icon boxSize="4" as={icon} />}
      {label && <Text>{label}</Text>}
      {icon2 && <Icon boxSize="4" as={icon2} />}
      {label2 && <Text>{label2}</Text>}
    </HStack>
  </Tooltip>
);

export default FooterContent;
