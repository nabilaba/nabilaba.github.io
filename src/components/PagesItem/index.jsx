import { UnorderedList } from "@chakra-ui/react";

const PagesItem = ({ children }) => (
  <UnorderedList
    spacing={0}
    listStylePos="outside"
    listStyleType={"circle"}
    ml={9}
  >
    {children}
  </UnorderedList>
);

export default PagesItem;
