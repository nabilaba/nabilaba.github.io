import {
  Avatar,
  Box,
  Flex,
  Icon,
  Stack,
  Heading,
  useColorModeValue,
  VStack,
  useColorMode,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck } from "react-icons/bs";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RiFlashlightFill } from "react-icons/ri";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Box ml={{ base: 14, md: 14 }} transition=".3s ease">
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
      <Box
        pos="fixed"
        bottom="0"
        zIndex="2"
        w="full"
        px="2"
        as="footer"
        h="3vh"
        bg={useColorModeValue("gray.200", "gray.900")}
      >
        <Text fontSize="13px" color="gray.500">
          © 2020 Nabil. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...props }) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    pb="3"
    zIndex="1"
    h="full"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("gray.50", "gray.700")}
    {...props}
  >
    <VStack h="full" w="full" alignItems="flex-start" justify="space-between">
      <Box w="full">
        <Flex px="3" py="5" align="center">
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
        px="3"
        py="5"
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
      px="3"
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
