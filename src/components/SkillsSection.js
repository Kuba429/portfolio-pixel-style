import React from "react";
import styled from "styled-components";

//import components
import SkillsContainer from "./SkillsContainer";

const SkillsSection = () => {
    return (
        <StyledSkillsSection id="SkillsSection">
            <h1>My Skills</h1>
            <SkillsContainer />
        </StyledSkillsSection>
    );
};
const StyledSkillsSection = styled.section`
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        width: 100%;
        text-align: center;
        font-size: 6rem;
        margin: 2rem;
    }
`;

export default SkillsSection;
