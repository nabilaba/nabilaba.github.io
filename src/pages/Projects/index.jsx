import {
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PagesItem from "../../components/PagesItem";
import Title from "../../components/Title";
import UserData from "../../utils/UserData";

const Projects = () => (
  <Stack spacing={5} h="full">
    <Title title={`projects - Nabil Aba`} />
    <Heading color="blue.500" fontSize="xl">
      Using ReactJS
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        {UserData.getProjects("reactjs").map((project, index) => (
          <ListItem key={index}>
            <Text color={UserData.getStatusColor(project.status)}>
              <Link
                target={"_blank"}
                href={project.url}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {project.name}
              </Link>{" "}
              - {project.status}
            </Text>
          </ListItem>
        ))}
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      Without Librarys
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        {UserData.getProjects("nolibary").map((project, index) => (
          <ListItem key={index}>
            <Text color={UserData.getStatusColor(project.status)}>
              <Link
                target={"_blank"}
                href={project.url}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {project.name}
              </Link>{" "}
              - {project.status}
            </Text>
          </ListItem>
        ))}
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      Using PHP
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        {UserData.getProjects("usingphp").map((project, index) => (
          <ListItem key={index}>
            <Text color={UserData.getStatusColor(project.status)}>
              <Link
                target={"_blank"}
                href={project.url}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {project.name}
              </Link>{" "}
              - {project.status}
            </Text>
          </ListItem>
        ))}
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      Others
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        {UserData.getProjects().map((project, index) => (
          <ListItem key={index}>
            <Text color={UserData.getStatusColor(project.status)}>
              <Link
                target={"_blank"}
                href={project.url}
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {project.name}
              </Link>{" "}
              - {project.status}
            </Text>
          </ListItem>
        ))}
      </PagesItem>
    </Stack>
  </Stack>
);

export default Projects;
