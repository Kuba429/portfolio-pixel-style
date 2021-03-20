import React from "react";
import styled from "styled-components";
import ArrowContainer from "./ArrowContainer";

//import components
import SkillsContainer from "./SkillsContainer";

const SkillsSection = () => {
    return (
        <StyledSkillsSection id="SkillsSection">
            <h1>My Skills</h1>
            <SkillsContainer />
            <ArrowContainer sectionUp='WelcomeSection' fromBottom='5'/>
        </StyledSkillsSection>
    );
};
const StyledSkillsSection = styled.section`
    /* overflow: hidden; */
    position:relative;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1 {
        width: 100%;
        text-align: center;
        font-size: 6rem;
        margin: 1rem;
    }
`;

export default SkillsSection;
