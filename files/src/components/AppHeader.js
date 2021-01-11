import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import Title from "./Title";

class AppHeader extends Component {

  constructor(){
    super();
    this.state = {
      activeCampaign: false,
      campaignText: "No active campaign..."
    };
  }

  render() {
    const { activeCampaign, campaignText } = this.state;

    return (
      <StyledHeader>
        <div className="row">
          <div className="column-width-logo">
            <Link to="/" >
              <img src={logo} alt="shop" />
          </Link>
          </div>
          <div className="column-width-title ">
            <Title name="Shark" title="Shop"/>
          </div>
          { activeCampaign &&
            (
            <div className="column-width-title ">
              <h1>{campaignText}</h1>
            </div>
            )
          }
        </div>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
width:100%;
height:100px
`;

export default AppHeader;
