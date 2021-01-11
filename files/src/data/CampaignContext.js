import React, { Component } from "react";
import { campaigns } from "./CampaignData";

const CampaignContext = React.createContext();

class CampaignProvider extends Component {

  state = {
    campaigns: [],
    selectedCampaign: {}
  };

  componentDidMount() {
    this.setCampaigns();
  }

  setCampaigns = () => {
    let tempCampaigns = [];
    campaigns.forEach(item => {
      const singleItem = { ...item };
      tempCampaigns = [...tempCampaigns, singleItem];
    });
    this.setState(() => {
      return { 
        campaigns: tempCampaigns
      };
    });
  };

  addCampaign = (campaign) => {
    this.setState(() => {

      // let foundIndex = this.state.campaigns.findIndex(item => item.id === campaign.id);
      
      // this.state.campaigns = [...this.state.campaigns, campaign]
    });
  };

  updateCampaign = campaign => {
    this.setState(() => {
      return { 
        selectedCampaign: null,
        campaigns: this.state.campaigns.map(x => (x.id === parseInt(campaign.id)) ? campaign : x)
      }
    });
  };

  getItem = id => {
    const campaign = this.state.campaigns.find(item => item.id === id);
    return campaign;
  };

  showDetail = id => {
    const campaign = this.getItem(id);
    this.setState(() => {
      return { selectedCampaign: campaign };
    });
  };


  render() {
    return (
      <CampaignContext.Provider
        value={{
          ...this.state,
          showDetail: this.showDetail,
          updateCampaign: this.updateCampaign,
        }}
      >
        {this.props.children}
      </CampaignContext.Provider>
    );
  }
}

const CampaignConsumer = CampaignContext.Consumer;

export { CampaignProvider, CampaignConsumer };
