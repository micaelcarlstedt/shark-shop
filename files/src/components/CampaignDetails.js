import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import { Button } from "./Button";
import Title from "./Title";
import { CampaignConsumer } from "../data/CampaignContext";

const StyledCampaignDetails = styled.div`

`;

class CampaignDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: '',
      name: '',
      img:'', 
      startdate:'', 
      enddate:'',
      discount_percentage:'', 
      active:'',
      products:[],
      redirect : false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = (target) => {
    if (this.state.redirect) {
      return <Redirect to={target} />
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="container">
            <CampaignConsumer>
              {campaignContext => {
                
                function handleSubmit(event) {
                  event.preventDefault();

                  let campaign = {
                    id: parseInt(event.target.elements.idControl.value),
                    name: event.target.elements.nameControl.value,
                    img: event.target.elements.imgControl.value,
                    startdate: event.target.elements.startdateControl.value,
                    enddate: event.target.elements.enddateControl.value,
                    discount_percentage: parseInt(event.target.elements.discount_percentageControl.value),
                    active: event.target.elements.activeControl.checked,
                    products: event.target.elements.productsControl.value,
                  }

                  campaignContext.updateCampaign(campaign);
                };

                if (campaignContext.selectedCampaign === null){
                  return <Redirect to='/campaigns' />
                }

                const {
                  id, 
                  name, 
                  img, 
                  startdate, 
                  enddate, 
                  discount_percentage, 
                  active,
                  products
                } = campaignContext.selectedCampaign;

                return (
                  <>
                    <Title name="Campaign: " title={name} />
                    <StyledCampaignDetails active={active} className="container full-width">
                      <div className="container align-self-center">
                        <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="formCampaignId" hidden>
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number"
                                          name="idControl"
                                          defaultValue={id}
                                          placeholder="The Id of the campaign"
                                           />
                          </Form.Group>

                          <Form.Group controlId="formCampaignName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                          name="nameControl"
                                          defaultValue={name}
                                          placeholder="Enter name of the campaign"/>
                          </Form.Group>

                          <Form.Group controlId="formCampaignStart">
                            <Form.Label>Startdate</Form.Label>
                            <Form.Control type="datetime-local"
                                          name="startdateControl"
                                          defaultValue={startdate}
                                          placeholder="The date when the campaign starts"/>
                          </Form.Group>

                          <Form.Group controlId="formCampaignEnd">
                            <Form.Label>Enddate</Form.Label>
                            <Form.Control type="datetime-local"
                                          name="enddateControl"
                                          defaultValue={enddate}
                                          placeholder="The date when the campaign ends"/>
                          </Form.Group>

                          <Form.Group controlId="formCampaignDiscount">
                            <Form.Label>Discount</Form.Label>
                            <Form.Control type="number"
                                          name="discount_percentageControl"
                                          defaultValue={discount_percentage}
                                          placeholder="The discount of the campaign"/>
                          </Form.Group>

                          <Form.Group controlId="formCampaignImage">
                            
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text"
                                          name="imgControl"
                                          defaultValue={img}
                                          placeholder="The Id of the campaign"/>
                          </Form.Group>

                          <Form.Group controlId="formCampaignProducts">
                            <Form.Label>Products</Form.Label>

                            <Form.Control as="select" name="productsControl" multiple>
                            {
                              products.map((productid, index) => (
                                        <option key={index} value={productid}>{productid}</option>
                              ))}
                            </Form.Control>
                            
                          </Form.Group>

                          <Form.Group controlId="formCampaignActive">
                            <Form.Check
                              type="switch"
                              name="activeControl"
                              label="Active"
                              defaultChecked={active}
                            />
                          </Form.Group>

                          <Link to="/campaigns">
                            <Button>Close</Button>
                          </Link>
                          <Button type="submit">
                            Save
                          </Button>
                        </Form>
                      </div>
                    </StyledCampaignDetails>
                  </>
                );
              }}
            </CampaignConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CampaignDetails;