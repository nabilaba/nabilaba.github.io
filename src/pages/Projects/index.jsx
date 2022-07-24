import { Heading, Stack } from "@chakra-ui/react";
import Title from "../../components/Title";

const Projects = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    alignItems="center"
    justifyContent="center"
    h="full"
  >
    <Title title={`projects - Nabil Aba`} />
    <Heading>Projects</Heading>
  </Stack>
);

export default Projects;
