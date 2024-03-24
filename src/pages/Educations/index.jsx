import {
  Box,
  Heading,
  ListItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import PagesItem from "../../components/PagesItem";
import Title from "../../components/Title";

const Educations = () => (
  <Stack spacing={5} h="full">
    <Title title={`educations - Nabil Aba`} />
    <Heading color="blue.500" fontSize="xl">
      My educational background
    </Heading>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Universitas Muhammadiyah Surakarta</ListItem>
        <PagesItem>
          <ListItem>S2 - Magister Informatika</ListItem>
          <ListItem>Sept 2023 - Now</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>Universitas Muhammadiyah Surakarta</ListItem>
        <PagesItem>
          <ListItem>S1 - Teknik Informatika</ListItem>
          <ListItem>Nov 2019 - Mar 2023</ListItem>
          <ListItem>IPK : 3.82</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
    <Box color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        <ListItem>SMA Negeri 2 Sukoharjo</ListItem>
        <PagesItem>
          <ListItem>Kelas Bahasa</ListItem>
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
        <ListItem>SD Negeri Telukan 02</ListItem>
        <PagesItem>
          <ListItem>2006 - 2013</ListItem>
        </PagesItem>
      </PagesItem>
    </Box>
  </Stack>
);

export default Educations;
