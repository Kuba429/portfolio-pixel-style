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

    @media (max-width: 1300px) {
        .arrow {
            width: 50px;
        }
    }

    @media (max-width: 800px) {
        display: none;
        bottom: 5%;
        .arrow {
            width: 40px;
        }
    }
    @media (max-width: 370px), (max-height: 700px) {
        bottom: 1%;
        .arrow {
            width: 50px;
        }
    }

    @media (max-height: 650px) {
        .arrow {
            width: 35px;
        }
    }
    @media (max-height: 400px) {
        .arrow {
            width: 20px;
        }
    }
`;

export default ArrowContainer;
