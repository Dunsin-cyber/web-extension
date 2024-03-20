import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "../pages/LandingPage";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const dom = <div>ICVaultBox, Waiting for UI</div>;

const container = document.createElement("div");
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
        <LandingPage />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
