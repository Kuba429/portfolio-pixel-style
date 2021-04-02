import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
//import components
import SkillCard from "./SkillCard";

import { skillData } from "../Data";

const SkillsContainer = () => {
    return (
        <StyledSkillsContainer>
            {skillData.map((item) => {
                return (
                    <SkillCard
                        tech={item.name}
                        description={item.description}
                        key={v4()}
                    />
                );
            })}
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
