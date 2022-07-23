import { Heading, Stack } from "@chakra-ui/react";

const Home = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    alignItems="center"
    justifyContent="center"
    h="full"
  >
    <Heading fontWeight="semibold">Hi! I'm Nabil</Heading>
  </Stack>
);

export default Home;
