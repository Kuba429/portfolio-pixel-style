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
        z-index: 5;
        .card {
            transform: rotateY(180deg);
            .back {
                transform: scale(100%);
                overflow-y: scroll;
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

            background-color: #5d5b6a;
            width: 100%;
            height: 100%;
            padding: 1px;
        }
        .front {
            backface-visibility: hidden;
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
            overflow-y: hidden;
            backface-visibility: hidden;
            .textContainer {
                width: 80%;
                height: 99%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h2 {
                    margin-bottom: 1rem;
                    /* font-size: 1.5rem; */
                    font-size: 1.5vw;
                }
                p {
                    text-align: center;
                    /* font-size: 1rem; */
                    font-size: 0.8vw;
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

    @media (max-width: 1064px) and (min-height: 860px) {
        margin: 1rem;
        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 100%;
                    h2 {
                        font-size: 1vw;
                    }
                    p {
                        font-size: 0.8vw;
                    }
                }
            }
        }
    }

    @media (max-width: 1300px) and (min-height: 990px) {
        width: 18vw;
        margin: 1rem;
    }

    @media (max-width: 1300px) and (min-height: 890px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 1.2vw;
                        margin: 0;
                    }
                    p {
                        font-size: 0.9vw;
                    }
                }
            }
        }
    }

    @media (max-width: 1050px) and (min-height: 990px) {
        width: 20vw;
        height: 20vw;
        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 1.6vw;
                        margin: 0;
                    }
                    p {
                        font-size: 1.2vw;
                    }
                }
            }
        }
    }

    @media (max-width: 900px) and (min-height: 800px) {
        width: 18vw;
        height: 18vw;
        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 1.7vw;
                        margin: 0;
                    }
                    p {
                        font-size: 1.15vw;
                    }
                }
            }
        }
    }
    @media (max-width: 700px) and (min-height: 800px) {
        width: 21vw;
        height: 21vw;

        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 1.7vw;
                        margin: 0;
                    }
                    p {
                        font-size: 1.3vw;
                    }
                }
            }
        }
    }
    @media (max-width: 700px) and (min-height: 600px) {
        width: 21vw;
        height: 21vw;

        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 1.8vw;
                        margin: 0;
                    }
                    p {
                        font-size: 1.5vw;
                    }
                }
            }
        }
    }

    @media (max-width: 415px) and (min-height: 625px) {
        width: 30vw;
        height: 30vw;

        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 3vw;
                        margin: 0;
                    }
                    p {
                        font-size: 2vw;
                    }
                }
            }
        }
    }
    @media (max-width: 340px) and (min-height: 550px) {
        width: 30vw;
        height: 30vw;

        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 3vw;
                        margin: 0;
                    }
                    p {
                        font-size: 2vw;
                    }
                }
            }
        }
    }

    @media (max-width: 650px) and (min-height: 550px) {
        width: 30vw;
        height: 30vw;

        .card {
            .back {
                .textContainer {
                    width: 100%;
                    height: 99%;
                    h2 {
                        font-size: 3.6vw;
                        margin: 0;
                    }
                    p {
                        font-size: 1.8vw;
                    }
                }
            }
        }
    }
`;

export default SkillCard;
