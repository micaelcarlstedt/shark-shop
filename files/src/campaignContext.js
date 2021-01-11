import React, { Component } from "react";
import { campaigns } from "./campaigns";

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
    
      // console.log(state)
      console.log(campaign);
      // selectedCampaign: props.campaign
      // campaigns: state
    //   console.log(this.state)
    //   this.state.selectedCampaign = campaign;
    //   this.state.campaigns = this.state.campaigns.map(x => (x.id === campaign.id) ? campaign : x);
    //   // this.state.campaigns = updatedCampaigns;
    // // let foundIndex = this.state.campaigns.findIndex(item => item.id === campaign.id);
    // this.state.campaigns[foundIndex] = this.state.selectedCampaign;
    // console.log(this.state)

    // const existingCampaign = this.state.campaigns.find(item => item.id === campaign.id);
    // console.log(existingCampaign)

    // let updatedCampaigns = this.state.campaigns.map(x => (x.id === campaign.id) ? campaign : x)

    // console.log(updatedCampaigns)

    // let tempCampaigns = [];
    // campaigns.forEach(item => {
    //   if (item.id === campaign.id){
        
    //   }
    //   const singleItem = { ...item };
    //   tempCampaigns = [...tempCampaigns, singleItem];
    // });

    // let tempCampaigns = [];
    // tempCampaigns = this.state.campaigns.map(item => (item.id === parseInt(campaign.id)) ? campaign : item)

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
