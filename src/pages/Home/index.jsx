import {
  Heading,
  Stack,
  Text,
  ListItem,
  useColorModeValue,
  Button,
  Link,
  Wrap,
} from "@chakra-ui/react";
import Typed from "react-typed";
import Title from "../../components/Title";
import PagesItem from "../../components/PagesItem";
import { Link as LinkTo, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const ItemNav = ({ to, children }) => (
    <Text
      as={LinkTo}
      to={to}
      color={useColorModeValue("gray.600", "gray.400")}
      fontStyle="italic"
      w="fit-content"
      _after={{
        content: '""',
        display: "block",
        w: "100%",
        h: "2px",
        bg: "gray.600",
        transform: "scaleX(0)",
        transformOrigin: "right",
        transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
      }}
      _hover={{
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "left",
        },
      }}
    >
      {">>"} {children}
    </Text>
  );

  return (
    <Stack h="full">
      <Title title={`Nabil Aba`} subtitle={`A personal website`} />
      <Stack maxW="xl">
        <Heading fontWeight="semibold">Hi! I'm Nabil</Heading>
        <Text
          textAlign="justify"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          specializing in front end development. Experienced with all stages of
          the development cycle for dynamic web projects. Well-versed in
          numerous programming languages including HTML5, JavaScript, ES6, CSS.
          Also often using{" "}
          <Text as="span" color="blue.500">
            MERN (MongoDB, ExpressJs, ReactJs, NodeJs) Development{" "}
          </Text>
          .
        </Text>
      </Stack>
      <Stack>
        <ItemNav to="/skills">skills</ItemNav>
        <ItemNav to="/projects">projects</ItemNav>
        <ItemNav to="/educations">educations</ItemNav>
        <ItemNav to="/certificates">certificates</ItemNav>
        <ItemNav to="/experiences">experiences</ItemNav>
      </Stack>
    </Stack>
  );
};

export default Home;
