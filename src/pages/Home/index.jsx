import { Heading, Stack } from "@chakra-ui/react";

const Home = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    alignItems="center"
    justifyContent="center"
    h="full"
    minH="96vh"
    pb="4"
  >
    <Heading fontWeight="semibold">Hi! I'm Nabil</Heading>
  </Stack>
);

export default Home;
