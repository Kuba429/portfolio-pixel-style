import React from "react";
import styled from "styled-components";

//components
import WelcomePage from "./WelcomePage";
const LandingPage = () => {
    return (
        <StyledLandingPage>
            <WelcomePage />
            <section className="test"></section>
        </StyledLandingPage>
    );
};

const StyledLandingPage = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    section {
        scroll-snap-align: center;
    }
`;
export default LandingPage;
