import { Heading, Stack, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import Title from "../../components/Title";

const Home = () => (
  <Stack alignItems="center" justifyContent="center" h="full">
    <Title title={`Nabil Aba`} subtitle={`A personal website`} />
    <Stack textAlign="center">
      <Heading fontWeight="semibold">Hi! I'm Nabil</Heading>
    </Stack>
  </Stack>
);

export default Home;
