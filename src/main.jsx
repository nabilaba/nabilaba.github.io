import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { styles } from "./globals";
import "@fontsource/ubuntu-mono";
import "./keyframes.css"

const theme = extendTheme({
  styles,
  fonts: {
    body: "Ubuntu Mono, system-ui, sans-serif",
    heading: "Ubuntu Mono, system-ui, sans-serif",
    monospace: "Menlo, monospace",
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
