import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import ProductList from "./components/ProductList";
import Campaigns from "./components/Campaigns";
import CampaignDetails from "./components/CampaignDetails";
import Details from "./components/Details";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/campaigns/details" component={CampaignDetails} />
          <Route path="/campaigns" component={Campaigns} />
          <Route component={Default} />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
