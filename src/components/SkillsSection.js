import React, { useState } from "react";
import styled from "styled-components";

//import components
import SkillsContainer from "./SkillsContainer";
import SkillBigCard from "./SkillBigCard";
import ArrowContainer from "./ArrowContainer";

const SkillsSection = () => {
    const [bigCardActive, setBigCardActive] = useState(false);

    const [activeSkill, setActiveSkill] = useState(false);
    return (
        <StyledSkillsSection id="SkillsSection">
            <h1>My Skills</h1>
            <SkillsContainer
                activeSkill={activeSkill}
                setActiveSkill={setActiveSkill}
            />
            <ArrowContainer sectionUp="WelcomeSection" fromBottom="5" />
            <SkillBigCard
               
                activeSkill={activeSkill}
                setActiveSkill={setActiveSkill}
            />
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
    }
`;

export default SkillsSection;
