import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import { CampaignProvider } from "./data/CampaignContext";
import { ProductProvider } from "./data/ProductContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ProductProvider>
    <CampaignProvider>
      <Router>
        <App />
      </Router>
    </CampaignProvider>
  </ProductProvider>,
  rootElement
);
