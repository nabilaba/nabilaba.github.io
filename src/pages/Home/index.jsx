import { Heading, Stack, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import Title from "../../components/Title";

const Home = () => (
  <Stack
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
            "I'm a Calon Frontend Engineering",
            "I'm a Android Engineering maybe :D",
            "Maybe Backend Engineering too :D",
            "Want to be Fullstack Engineering",
          ]}
          typeSpeed={50}
          backSpeed={25}
          backDelay={1500}
          loop
          smartBackspace
        />
      </Heading>
    </Stack>
  </Stack>
);

export default Home;
