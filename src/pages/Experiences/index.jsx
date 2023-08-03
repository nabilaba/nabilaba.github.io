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
import experiencesData from "../../utils/UserData/experiences";
import { formatDateInIndonesian } from "../../utils";

const Experiences = () => (
  <Stack spacing={5} h="full">
    <Title title={`experiences - Nabil Aba`} />
    <Heading color="blue.500" fontSize="xl">
      My experiences
    </Heading>
    <Box color={useColorModeValue("gray.600", "gray.400")} maxW="2xl">
      {experiencesData?.map((experience, index) => (
        <PagesItem key={index}>
          <ListItem>
            <Text fontWeight="bold">{experience.title}</Text>
            <Text>{experience.company}</Text>
            <Text>
              {formatDateInIndonesian(experience.start)} -{" "}
              {formatDateInIndonesian(experience.end)}
            </Text>
            <PagesItem>
              {experience.description?.map((description, index) => (
                <ListItem key={index} whiteSpace="pre-wrap" textAlign="justify">
                  {description}
                </ListItem>
              ))}
            </PagesItem>
          </ListItem>
        </PagesItem>
      ))}
    </Box>
  </Stack>
);

export default Experiences;
