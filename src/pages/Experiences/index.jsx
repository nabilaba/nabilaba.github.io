import {
  Box,
  Heading,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PagesItem from "../../components/PagesItem";
import Title from "../../components/Title";

const Experiences = () => (
  <Stack spacing={5} h="full">
    <Title title={`experiences - Nabil Aba`} />
    <Heading color="blue.500" fontSize="xl">
      My experiences
    </Heading>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>
          Frontend Engineering Student at Ruangguru from February 2022 to July
          2022
        </ListItem>
        <Text as={"p"}>
          I have been selected for TOP 5 Finalist as Frontend Engineering in the
          Final Project and my final grade is 4.0. So this is what i have
          learned during my time at Ruangguru:
        </Text>
        <PagesItem>
          <ListItem>
            Learn how to make a simple website using HTML and CSS
          </ListItem>
          <ListItem>
            Learn about basics of javascript programming like algorithms,
            variable, comparison, looping, array, function, object, error
            handling, callback, async, and promise
          </ListItem>
          <ListItem>
            Learn about javascript es6 like variables, arrow function, filter,
            map, order, reduce, spread syntax, destructing, and for of
          </ListItem>
          <ListItem>
            Learn data-structure like array, hashmap, linkedlist, queue,
            recursion, set, and stack
          </ListItem>
          <ListItem>
            Learn how to setup ReactJS using webpack, create-react-app, and
            vitejs
          </ListItem>
          <ListItem>
            Learn how to using ChakraUI as library for frontend
          </ListItem>
          <ListItem>Learn how to handle events in ReactJS</ListItem>
          <ListItem>Learn about using useState, useEffect and useRef</ListItem>
          <ListItem>
            Learn how to make Single Page Application using react router dom
          </ListItem>
          <ListItem>
            Learn state management like redux tools using zustand
          </ListItem>
          <ListItem>Learn state props and children props</ListItem>
          <ListItem>
            Learn fetching data from API using fetch and axios
          </ListItem>
          <ListItem>
            Learn about how to build simple CRUD API using express
          </ListItem>
          <ListItem>
            Learn about how to build login auth using bearer token
          </ListItem>
          <ListItem>Learn about how to commit and push to github</ListItem>
          <ListItem>
            Learn about how to deploy static website using github pages,
            netlify, vercel and surge
          </ListItem>
          <ListItem>
            Learn about how to deploy to heroku for database and server
          </ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>
          Features Maker and User Experience Designer at AncientOS from May 2021
        </ListItem>
        <Text as={"p"}>
          I have been working on this project for a long time. In this team is
          like family for me. What i have done is:
        </Text>
        <PagesItem>
          <ListItem>New look for Settings homepage application</ListItem>
          <ListItem>New method for random color in expanded statusbar</ListItem>
          <ListItem>Make battery landscape in statusbar</ListItem>
          <ListItem>
            And many more... You can check it on AncientOS telegram channel
          </ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
  </Stack>
);

export default Experiences;
