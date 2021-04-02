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
            <ArrowContainer
                sectionUp="WelcomeSection"
                sectionDown="AboutSection"
                fromBottom="5"
            />
        </StyledSkillsSection>
    );
};
const StyledSkillsSection = styled.section`
    position: relative;
    min-height: 100vh;
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

    @media (max-height: 750px), (max-width: 700px) {
        h1 {
            font-size: 4rem;
            margin: 0.7rem;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 3rem;
        }
    }
`;

export default SkillsSection;
