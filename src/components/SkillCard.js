import React from "react";
import styled from "styled-components";


const SkillCard = ({ tech, description }) => {
    

    return (
        <StyledSkillCard>
            <div className={`card ${tech}`}>
                <figure className="front face">
                    <img src={`assets/pixel/${tech}.png`} alt="" />
                </figure>
                <figure className="back face">
                    <div className="textContainer">
                        <h2>{tech}</h2>
                        <p>{description}</p>
                    </div>
                </figure>
            </div>
        </StyledSkillCard>
    );
};
const StyledSkillCard = styled.div`
    width: 16vw;
    height: 16vw;
    user-select: none;
    &:hover {
        .card {
            transform: rotateY(180deg);
            .back {
                /* overflow-y: scroll; */
            }
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* overflow: hidden; */
            .textContainer {
                width: 80%;
                height: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h2 {
                    margin-bottom: 1rem;
                }
                p{
                    text-align:center;
                }
            }
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
