import {
  Box,
  Heading,
  ListItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import PagesItem from "../../components/PagesItem";

const Educations = () => (
  <Stack spacing={5} h="full">
    <Heading color="blue.500" fontSize="xl">
      My educational background
    </Heading>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Universitas Muhammadiyah Surakarta</ListItem>
        <PagesItem>
          <ListItem>Information Technology</ListItem>
          <ListItem>2019 - Now</ListItem>
          <ListItem>IPK : 3.8</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>SMA Negeri 2 Sukoharjo</ListItem>
        <PagesItem>
          <ListItem>Language Class</ListItem>
          <ListItem>2016 - 2019</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>SMP Negeri 1 Grogol</ListItem>
        <PagesItem>
          <ListItem>2013 - 2016</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>SD Negeri 2 Tegalmade</ListItem>
        <PagesItem>
          <ListItem>2006 - 2013</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
  </Stack>
);

export default Educations;
