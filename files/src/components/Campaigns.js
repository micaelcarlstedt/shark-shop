import React, { Component } from "react";
import Campaign from "./Campaign";
import Title from "./Title";
import { CampaignConsumer } from "../campaignContext";

export default class Campaigns extends Component {
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
{/* <div className="container align-self-center">
                <div className="container full-width align-self-center">
                  <input className="container fluid col-4 align-content-center align-self-center"></input>
                </div>
              </div> */}
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
