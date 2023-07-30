import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    // make transition when changing colorMode
    "html *": { transition: "color, background-color 200ms linear !important" },
    "::-webkit-scrollbar": {
      width: "14px",
      height: "14px",
    },
    "::-webkit-scrollbar-thumb": {
      background: mode("gray.400", "gray.700")(props),
      borderLeft: mode("1px solid gray", "1px solid gray")(props),
      borderRadius: "0px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: mode("gray.400", "gray.700")(props),
    },
    "::-webkit-scrollbar-thumb:active": {
      background: mode("gray.400", "gray.700")(props),
    },
    "::-webkit-scrollbar-track": {
      background: mode("#e6e6e6", "gray.600")(props),
      borderLeft: mode("1px solid gray", "1px solid gray")(props),
      borderRadius: "0px",
    },
    "::-webkit-scrollbar-track:hover": {
      background: mode("#e6e6e6", "gray.600")(props),
    },
    "::-webkit-scrollbar-track:active": {
      background: mode("#e6e6e6", "gray.600")(props),
    },
    "::-webkit-scrollbar-corner": {
      background: "transparent",
    },
  }),
};
