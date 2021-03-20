import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { arrowVariants } from "../animation";
const ArrowContainer = ({ sectionUp, sectionDown, fromBottom }) => {
    return (
        <StyledArrowContainer
            className="arrowContainer"
            fromBottom={fromBottom}
        >
            {sectionUp != false && (
                <a href={`#${sectionUp}`}>
                    <motion.img
                        variants={arrowVariants}
                        whileTap="whileTap"
                        initial="initial"
                        src="assets/arrow.png"
                        alt=""
                        className="arrow up"
                    />
                </a>
            )}
            {sectionDown != false && (
                <a href={`#${sectionDown}`}>
                    <motion.img
                        variants={arrowVariants}
                        whileTap="whileTap"
                        initial="initialDown"
                        src="assets/arrow.png"
                        alt=""
                        className="arrow down"
                    />
                </a>
            )}
        </StyledArrowContainer>
    );
};

const StyledArrowContainer = styled.div`
    position: absolute;
    bottom: ${(props) =>
        !isNaN(props.fromBottom) ? `${props.fromBottom}%` : `10%`};
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 60%;
    /* bottom: 10%; */
    .arrow {
        width: 70px;
        user-select: none;
        &.down {
            transform: rotateX(180deg);
        }
    }
`;

export default ArrowContainer;
