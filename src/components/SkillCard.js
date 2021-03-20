import React from "react";
import styled from "styled-components";

const SkillCard = ({ tech }) => {
    return (
        <StyledSkillCard>
            <div className={`card ${tech}`}>
                <figure className="front face">
                    <img src={`assets/pixel/${tech}.png`} alt="" />
                </figure>
                <figure className="back face">
                    <p>{tech}</p>
                </figure>
            </div>
        </StyledSkillCard>
    );
};
const StyledSkillCard = styled.div`
    width: 16vw;
    height: 16vw;

    &:hover {
        .card {
            transform: rotateY(180deg);
        }
    }
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
        transition: ease all 1s;
        transform-style: preserve-3d;
        .face {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            transform-style: preserve-3d;
            background-color: #5d5b6a;
            width: 100%;
            height: 100%;
            padding: 1px;
        }
        .front {
            img {
                object-fit: scale-down;
                width: 80%;
            }
        }
        .back {
            width: 99%;
            background-color: white;
            color: black;
            transform: rotateY(180deg);
        }
    }
    .figma {
        .front {
            img {
                object-fit: scale-down;
                height: 80%;
            }
        }
    }
`;

export default SkillCard;
