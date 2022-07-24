import { Heading, Stack } from "@chakra-ui/react";
import Title from "../../components/Title";

const Certificates = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    alignItems="center"
    justifyContent="center"
    h="full"
  >
    <Title title={`certificates - Nabil Aba`} />
    <Heading>Certificates</Heading>
  </Stack>
);

export default Certificates;
