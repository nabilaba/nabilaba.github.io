import { Heading, ListItem, Stack, useColorModeValue } from "@chakra-ui/react";
import PagesItem from "../../components/PagesItem";

const Skills = () => (
  <Stack spacing={5} h="full">
    <Heading color="blue.500" fontSize="xl">
      Technical Skills
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Web Development with PHP</ListItem>
        <ListItem>Frontend Engineering</ListItem>
        <ListItem>Android OS Engineering</ListItem>
        <ListItem>Decompile Recompile with Apktool</ListItem>
        <ListItem>Writing Guide</ListItem>
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      Programming Languages
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>In modern times:</ListItem>
        <PagesItem>
          <ListItem>Javascript</ListItem>
          <PagesItem>
            <ListItem>ES6</ListItem>
            <ListItem>React.js</ListItem>
          </PagesItem>
        </PagesItem>
        <ListItem>In ancient times:</ListItem>
        <PagesItem>
          <ListItem>Java</ListItem>
          <ListItem>PHP</ListItem>
        </PagesItem>
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      My Favorite Techs
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Node.js</ListItem>
        <ListItem>Github Actions</ListItem>
        <ListItem>VSCode</ListItem>
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      I've used some CSS librarys
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Bootstrap</ListItem>
        <ListItem>Chakra-ui</ListItem>
        <ListItem>Tailwindcss</ListItem>
        <ListItem>Sass</ListItem>
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      I've used some deployment tools
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Github Pages</ListItem>
        <ListItem>Netlify</ListItem>
        <ListItem>Vercel</ListItem>
        <ListItem>Heroku</ListItem>
      </PagesItem>
    </Stack>
  </Stack>
);

export default Skills;
