import React from "react";
import styled from "styled-components";

//components
import WelcomePage from "./WelcomePage";
import SkillsSection from './SkillsSection.js'

const LandingPage = () => {
    return (
        <StyledLandingPage>
            <WelcomePage />
            <SkillsSection />
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
        height: 100vh;
        scroll-snap-align: center;
    }
`;
export default LandingPage;
