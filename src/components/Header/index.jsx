import { Flex, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FaJs, FaReact, FaSass } from "react-icons/fa";
import { Link as LinkTo } from "react-router-dom";

const HeaderContent = () => (
  <Flex
    as="header"
    align="center"
    w="full"
    px="1"
    borderColor={useColorModeValue("inherit", "gray.700")}
    bg={useColorModeValue("white", "gray.900")}
    position="sticky"
    top="0"
  >
    <HStack spacing={1} h="full">
      <HeaderItem icon={FaJs} label="skills.js" color="yellow.500" />
      <HeaderItem icon={FaReact} label="projects.jsx" color="blue.500" />
      <HeaderItem icon={FaSass} label="educations.sass" color="pink.500" />
    </HStack>
  </Flex>
);

const HeaderItem = ({ icon, label, color }) => (
  <HStack
    as={LinkTo}
    to={`/${label}`}
    color={useColorModeValue("gray.500", "gray.400")}
    spacing={1}
    align="center"
    role="group"
    h="full"
    fontSize={".75rem"}
    cursor="pointer"
    w="max-content"
    borderRightWidth={2}
    borderRightColor={useColorModeValue("gray.50", "gray.800")}
    _hover={{ color: useColorModeValue("gray.700", "white") }}
    py="2"
    px="3"
  >
    {icon && <Icon boxSize="5" as={icon} color={color} />}
    {label && <Text>{label}</Text>}
  </HStack>
);

export default HeaderContent;
