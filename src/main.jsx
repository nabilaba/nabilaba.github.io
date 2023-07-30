import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { styles } from "./globals";
import "@fontsource/ubuntu-mono";
import "./keyframes.css"
import "@fontsource/poppins"

const theme = extendTheme({
  styles,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, monospace",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
    disableTransitionOnChange: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
