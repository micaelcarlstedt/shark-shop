import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ProductList from "./components/ProductList";
import CampaignList from "./components/CampaignList";
import CampaignDetails from "./components/CampaignDetails";
import ProductDetails from "./components/ProductDetails";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={ProductDetails} />
          <Route path="/campaigns/details" component={CampaignDetails} />
          <Route path="/campaigns" component={CampaignList} />
          <Route component={Default} />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
