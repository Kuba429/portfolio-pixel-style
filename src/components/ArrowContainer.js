import React from "react";
import styled from "styled-components";

const ArrowContainer = ({ sectionUp, sectionDown, fromBottom }) => {
    return (
        <StyledArrowContainer
            className="arrowContainer"
            fromBottom={fromBottom}
        >
            {sectionUp != false && (
                <a href={`#${sectionUp}`}>
                    <img src="assets/arrow.png" alt="" className="arrow up" />
                </a>
            )}
            {sectionDown != false && (
                <a href={`#${sectionDown}`}>
                    <img src="assets/arrow.png" alt="" className="arrow down" />
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
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    /* bottom: 10%; */
    .arrow {
        width: 70px;
        margin: 0 10rem;
        &.down {
            transform: rotateX(180deg);
        }
    }
`;

export default ArrowContainer;
