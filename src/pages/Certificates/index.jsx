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

const Certificates = () => (
  <Stack spacing={5} h="full">
    <Title title={`certificates - Nabil Aba`} />
    <Heading color="blue.500" fontSize="xl">
      Dicoding
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        {UserData.getSertificates("Dicoding").map((certificate, index) => (
          <ListItem key={index}>
            <Link target={"_blank"} href={certificate.url}>
              {certificate.name}
            </Link>
          </ListItem>
        ))}
      </PagesItem>
    </Stack>

    <Heading color="blue.500" fontSize="xl">
      Google Digital Garage
    </Heading>
    <Stack color={useColorModeValue("gray.600", "gray.400")}>
      <PagesItem>
        {UserData.getSertificates("GoogleDigitalGarage").map(
          (certificate, index) => (
            <ListItem key={index}>
              <Link target={"_blank"} href={certificate.url}>
                {certificate.name}
              </Link>
            </ListItem>
          )
        )}
      </PagesItem>
    </Stack>
  </Stack>
);

export default Certificates;
