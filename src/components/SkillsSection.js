import React, { useState } from "react";
import styled from "styled-components";

//import components
import SkillsContainer from "./SkillsContainer";
import ArrowContainer from "./ArrowContainer";

const SkillsSection = () => {
    return (
        <StyledSkillsSection id="SkillsSection">
            <h1>My Skills</h1>
            <SkillsContainer />
            <ArrowContainer sectionUp="WelcomeSection" sectionDown="ContactSection" fromBottom="5" />
        </StyledSkillsSection>
    );
};
const StyledSkillsSection = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
        width: 100%;
        text-align: center;
        font-size: 6rem;
        margin: 1rem;
        user-select: none;
    }
`;

export default SkillsSection;
