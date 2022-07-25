import {
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
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>
          Cyber Security Analyst at Kominfo from July 2022 until now
        </ListItem>
        <ListItem>
          Frontend Engineering Student at Ruangguru from February 2022 to July
          2022
        </ListItem>
        <ListItem>
          Features Maker and User Experience Designer at AncientOS from May 2022
        </ListItem>
      </PagesItem>
    </Stack>
  </Stack>
);

export default Experiences;
