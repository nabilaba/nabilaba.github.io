import { Flex, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FaJs, FaReact, FaSass, FaTimes } from "react-icons/fa";
import { Link as LinkTo, useLocation, useNavigate } from "react-router-dom";
import { VscJson } from "react-icons/vsc";

const HeaderContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const HeaderItem = ({ icon, label, color, extension }) => (
    <HStack
      color={
        location.pathname === `/${label}`
          ? useColorModeValue("gray.700", "white")
          : useColorModeValue("gray.500", "gray.400")
      }
      bg={
        location.pathname === `/${label}`
          ? useColorModeValue("gray.100", "gray.800")
          : "none"
      }
      spacing={3}
      align="center"
      role="group"
      h="full"
      fontSize={".75rem"}
      cursor="pointer"
      w="max-content"
      borderRightWidth={2}
      borderRightColor={useColorModeValue("gray.50", "gray.800")}
      _hover={{ color: useColorModeValue("gray.700", "white") }}
      px="4"
    >
      <HStack as={LinkTo} to={`/${label}`} spacing={1} align="center" h="full" py="2">
        {icon && <Icon boxSize="5" as={icon} color={color} />}
        {label && (
          <Text display={location.pathname === `/${label}` ? "block" : {base: "none", md: "block" }}>
            {label}
            {extension}
          </Text>
        )}
      </HStack>
      {location.pathname === `/${label}` && (
        <Icon
          boxSize="3"
          as={FaTimes}
          color={useColorModeValue("gray.400", "gray.500")}
          _hover={{
            color: useColorModeValue("gray.500", "gray.400"),
          }}
          onClick={() => navigate("/")}
        />
      )}
    </HStack>
  );

  return (
    <Flex
      as="header"
      align="center"
      w="full"
      borderColor={useColorModeValue("inherit", "gray.700")}
      bg={useColorModeValue("white", "gray.900")}
      position="sticky"
      top="0"
    >
      <HStack spacing={0} h="full">
        <HeaderItem
          icon={FaJs}
          extension=".js"
          label="skills"
          color="yellow.500"
        />
        <HeaderItem
          icon={FaReact}
          extension=".jsx"
          label="projects"
          color="blue.500"
        />
        <HeaderItem
          icon={FaSass}
          extension=".sass"
          label="educations"
          color="pink.500"
        />
        <HeaderItem
          icon={VscJson}
          extension=".json"
          label="certificates"
          color="green.500"
        />
      </HStack>
    </Flex>
  );
};

export default HeaderContent;
