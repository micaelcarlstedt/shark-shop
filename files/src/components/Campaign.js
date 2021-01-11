import React, { Component } from "react";
import styled from "styled-components";
import Badge from 'react-bootstrap/Badge';
import { Button } from "./Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CampaignConsumer } from "../campaignContext";

const StyledCampaign = styled.div`
  .campaign {
    transition: all 1s linear;
    padding: 1em
  }
  &:hover {
    .campaign {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      pointer: 
    }
  }
`;

class Campaign extends Component {
  render() {
    const { 
      id, 
      name, 
      img,
      discount_percentage, 
      active,
    } = this.props.campaign;

    return (
      <StyledCampaign active={active} className="container full-width">
        <div className="row campaign align-self-center">
          <div className="col-1 px-0">
                <img src={img} alt="campaign" className="img-fluid align-self-center" />
          </div>
          <div className="col-6 align-self-center">
            {name}
          </div>          
          <div className="col-2 align-self-center">
              {discount_percentage} %
          </div>
          <div className="col-1 align-self-center">
            {
              active &&
              <h2>
                <Badge variant="secondary">Active</Badge>
              </h2>
            }
          </div>
          <div  className="col-1 align-self-center">
              <CampaignConsumer>
                {value => (
                    <div
                      className="container flex"
                      onClick={() => value.showDetail(id)}
                    >
                      <Link to="/campaigns/details">
                        <Button>Details</Button>
                      </Link>
                    </div>
                  )}
              </CampaignConsumer>
          </div>
          
        </div>
      </StyledCampaign>
    );
  }
}

Campaign.propTypes = {
  campaign: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    startdate: PropTypes.string,
    enddate: PropTypes.string,
    discount_percentage: PropTypes.number,
    active: PropTypes.bool,
    products: PropTypes.arrayOf(PropTypes.number),
  }).isRequired
};

export default Campaign;