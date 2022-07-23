import {
  Avatar,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck } from "react-icons/bs";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RiFlashlightFill } from "react-icons/ri";

const SidebarContent = (props) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    pb="25px"
    zIndex="1"
    h="full"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("gray.50", "gray.700")}
  >
    <VStack h="full" w="full" alignItems="flex-start" justify="space-between">
      <Box w="full">
        <Flex px="2" py="5" align="center">
          <Icon as={RiFlashlightFill} h={8} w={8} />
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem icon={AiOutlineHome} />
          <NavItem icon={AiOutlineTeam} />
          <NavItem icon={BsFolder2} />
          <NavItem icon={BsCalendarCheck} />
        </Flex>
      </Box>

      <Flex
        direction="column"
        p="2"
        mt={10}
        justify="center"
        alignItems="center"
      >
        <Avatar
          size={"sm"}
          name="Nabil"
          src="https://avatars.githubusercontent.com/u/45154878?v=4"
        />
        <IconButton
          mt="4"
          size={"sm"}
          onClick={props.toggleColorMode}
          variant="ghost"
          icon={props.colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        ></IconButton>
      </Flex>
    </VStack>
  </Box>
);

const NavItem = (props) => {
  const color = useColorModeValue("gray.600", "gray.300");

  const { icon } = props;
  return (
    <Flex
      align="center"
      px="2"
      py="4"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
    </Flex>
  );
};

export default SidebarContent;
