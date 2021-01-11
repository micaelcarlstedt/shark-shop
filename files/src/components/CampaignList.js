import React, { Component } from "react";
import Campaign from "./Campaign";
import Title from "./Title";
import { CampaignConsumer } from "../data/CampaignContext";

export default class CampaignList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="container">
            <Title name="Our" title="campaigns" />
            <div>
                <br/>
                <br/>
                <br/>
              </div>
            <div className="container full-width">
              <CampaignConsumer>
                {value => {
                  return value.campaigns.map(campaign => {
                    return <Campaign key={campaign.id} campaign={campaign} />;
                  });
                }}
              </CampaignConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
