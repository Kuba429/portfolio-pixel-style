import React from "react";
import styled from "styled-components";

//import components
import SkillCard from "./SkillCard";

const SkillsContainer = () => {
    return (
        <StyledSkillsContainer>
            <SkillCard tech="html" />
            <SkillCard tech="css" />
            <SkillCard tech="js" />
            <SkillCard tech="scss" />
            <SkillCard tech="react" />
            <SkillCard tech="node" />
            <SkillCard tech="netlify" />
            <SkillCard tech="mongodb" />
            <SkillCard tech="linux" />
            <SkillCard tech="git" />
            <SkillCard tech="chrome" />
            <SkillCard tech="figma" />
            
        </StyledSkillsContainer>
    );
};

const StyledSkillsContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
`;

export default SkillsContainer;
