import { Heading, ListItem, Stack, UnorderedList, useColorModeValue } from "@chakra-ui/react";

const Educations = () => (
  <Stack spacing={5} h="full" p={5}>
    <Heading color="blue.500" fontSize="xl">
      My education background
    </Heading>
    <Stack spacing={5} color={useColorModeValue("gray.600", "gray.400")}>
      <UnorderedList spacing={4} stylePosition="inside" ml={8}>
        <ListItem>Universitas Muhammadiyah Surakarta</ListItem>
        <UnorderedList spacing={1} stylePosition="inside" ml={16}>
          <ListItem>Information Technology</ListItem>
          <ListItem>2019 - Now</ListItem>
          <ListItem>IPK : 3.8</ListItem>
        </UnorderedList>
        <ListItem>SMA Negeri 2 Surakarta</ListItem>
        <UnorderedList spacing={1} stylePosition="inside" ml={16}>
          <ListItem>Language Class</ListItem>
          <ListItem>2016 - 2019</ListItem>
        </UnorderedList>
        <ListItem>SMP Negeri 1 Grogol</ListItem>
        <UnorderedList spacing={1} stylePosition="inside" ml={16}>
          <ListItem>2013 - 2016</ListItem>
        </UnorderedList>
        <ListItem>SD Negeri 2 Tegalmade</ListItem>
        <UnorderedList spacing={1} stylePosition="inside" ml={16}>
          <ListItem>2006 - 2013</ListItem>
        </UnorderedList>
      </UnorderedList>
    </Stack>
  </Stack>
);

export default Educations;
