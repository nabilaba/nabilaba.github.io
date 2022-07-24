import {
  Avatar,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  VStack,
  IconButton,
  Divider,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RiFlashlightFill } from "react-icons/ri";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const SidebarContent = (props) => {
  const navigate = useNavigate();
  const NavItem = (props) => {
    const color = useColorModeValue("gray.600", "gray.300");

    const { icon, url } = props;
    return (
      <Flex
        as={Link}
        href={url}
        target="_blank"
        align="center"
        px="2"
        py="4"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        color={useColorModeValue("gray.500", "gray.400")}
        _hover={{
          color: useColorModeValue("gray.700", "gray.200"),
        }}
      >
        {icon && (
          <Icon
            mx="auto"
            boxSize="6"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
      </Flex>
    );
  };
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      pb={25}
      zIndex="1"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("gray.50", "gray.700")}
    >
      <VStack h="full" w="full" alignItems="flex-start" justify="space-between">
        <Box w="full">
          <Flex px="2" py="5" align="center">
            <Icon
              as={RiFlashlightFill}
              h={8}
              w={8}
              cursor="pointer"
              color={useColorModeValue("gray.500", "gray.400")}
              _hover={{
                color: useColorModeValue("gray.700", "gray.200"),
              }}
              onClick={() => {
                navigate("/");
              }}
            />
          </Flex>
          <Flex px="2" align="center">
            <Divider />
          </Flex>

          <Flex
            direction="column"
            as="nav"
            fontSize="md"
            color="gray.600"
            aria-label="Main Navigation"
          >
            <NavItem icon={FaTelegramPlane} url="https://t.me/nabilaba" />
            <NavItem icon={GoMarkGithub} url="https://github.com/nabilaba" />
            <NavItem
              icon={FaLinkedin}
              url="https://www.linkedin.com/in/nabilaba/"
            />
            <NavItem icon={IoLogoWhatsapp} url="https://wa.me/6283146542084" />
            <NavItem
              icon={TiSocialInstagram}
              url="https://instagram.com/nabil_aba"
            />
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
            filter="grayscale(100%)"
            cursor={"pointer"}
            _hover={{
              filter: "grayscale(0%)",
            }}
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
};

export default SidebarContent;
