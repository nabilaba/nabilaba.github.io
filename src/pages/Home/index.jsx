import { Heading, Stack, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import Title from "../../components/Title";

const Home = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    alignItems="center"
    justifyContent="center"
    h="full"
  >
    <Title title={`Nabil Aba`} subtitle={`A personal website`} />
    <Stack textAlign="center">
      <Heading fontWeight="semibold">Hi! I'm Nabil</Heading>
      <Heading fontWeight="normal" color="gray.500" fontSize="xl">
        <Typed
          strings={[
            "I'm a Frontend Engineering.",
            "Still learning for Backend Engineering.",
            "Want to be Fullstack Engineering.",
          ]}
          typeSpeed={50}
          backSpeed={50}
          backDelay={1000}
          loop
          smartBackspace
        />
      </Heading>
    </Stack>
  </Stack>
);

export default Home;
