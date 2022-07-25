import { Heading, Stack } from "@chakra-ui/react";
import Title from "../../components/Title";

const Experiences = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    alignItems="center"
    justifyContent="center"
    h="full"
  >
    <Title title={`experiences - Nabil Aba`} />
    <Heading>Experiences</Heading>
  </Stack>
);

export default Experiences;
