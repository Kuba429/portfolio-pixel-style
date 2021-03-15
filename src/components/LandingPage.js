import React from "react";
import styled from "styled-components";

//components
import WelcomePage from "./WelcomePage";
const LandingPage = () => {
    return (
        <StyledLandingPage>
            <WelcomePage />
        </StyledLandingPage>
    );
};

const StyledLandingPage = styled.div``;
export default LandingPage;
