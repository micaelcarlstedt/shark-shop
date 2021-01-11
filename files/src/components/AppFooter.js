import React, { Component } from "react";
import styled from "styled-components";

 class AppFooter extends Component {
  render() {
    return (
     <StyledFooter>
       <p>&copy; {new Date().getFullYear()} Copyright: Micael Carlstedt</p>
     </StyledFooter>
    );
  }
}
const StyledFooter = styled.footer`
padding: 1rem;
background-color: lightgray;
position: fixed;
bottom: 0;
text-align: center
width: 100%;
`;

export default AppFooter;