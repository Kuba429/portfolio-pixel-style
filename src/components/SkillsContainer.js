import React from "react";
import styled from "styled-components";
import { uuid } from "uuidv4";
//import components
import SkillCard from "./SkillCard";

import {skillData} from "../Data";

const SkillsContainer = () => {
    return (
        <StyledSkillsContainer>
            {skillData.map((item) => {
                return (
                    <SkillCard
                        tech={item.name}
                        description={item.description}
                        key={uuid()}
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
