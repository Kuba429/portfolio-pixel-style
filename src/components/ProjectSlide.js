import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

const ProjectSlide = ({ project }) => {
    return (
        <StyledProjectSlide
            image={`assets/projectSnippets/${project.name}.png`}
        >
            <h1>{project.title}</h1>
            <div className="hoverPanel">
                <h2 className="title">{project.title}</h2>
                <div className="about">
                    <div className="description half">
                        <p>{project.description}</p>
                    </div>
                    <div className="techUsed half">
                        <h2 className="title">Tech used</h2>
                        <ul>
                            {project.techUsed.map((item) => {
                                return <li key={v4()}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="links">
                    <a href="" className="link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="" className="link">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </StyledProjectSlide>
    );
};

const StyledProjectSlide = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.image});
    background-size: cover;
    height: 70vh;
    width: 70vw;

    h1 {
        font-size: 3rem;
        padding: 1rem;
        background-color: white;
        color: #5d5b6a;
        transition: ease all 0.3s;
        z-index: 2;
    }
    .hoverPanel {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 1;

        transition: all ease 0.3s;
        backdrop-filter: blur(10px);
        color: #5d5b6a;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 3rem;
            margin: 2rem;
            text-align: center;
        }
        .about {
            height: 100%;
            width: 100%;

            display: flex;
            flex-direction: row;
            .description {
                display: flex;
                justify-content: center;
                align-items: center;
                border-right: 1px solid #5d5b6a;
                p {
                    font-size: 2rem;
                    margin: 4rem;
                    text-align: center;
                }
            }
            .techUsed {
                    display:flex;
                        flex-direction: column;
                        align-items:center;
                        justify-content:center;
                ul {
                    width: 100%;
                    li {
                        list-style: none;
                        text-align: center;
                        font-size: 2rem;
                        line-height: 4rem;
                    }
                }
            }
            .half {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    font-size: 2.5rem;
                    text-align: center;
                }
            }
        }
        .links {
            width: 100%;
            height: 20%;
            display: flex;

            .link {
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: #5d5b6a;
                font-size: 300%;
                &:hover {
                    background-color: #f0f0f0;
                }
            }
        }
        * {
            transition: inherit;
            opacity: 0;
        }
    }

    &:hover {
        .hoverPanel {
            background-color: white;
            * {
                opacity: 1;
            }
        }
        h1 {
            opacity: 0;
        }
    }

    @media (max-width: 1400px) {
        height: 65vh;

        h1 {
            font-size: 2.4rem !important;
        }

        .hoverPanel {
            h2 {
                font-size: 2.4rem;
            }
            .about {
                .techUsed {
                    ul {
                        
                        li {
                            font-size: 1.5rem;
                        }
                    }
                }
                .description {
                    p {
                        font-size: 1.6rem;
                    }
                }
                .half {
                    .title {
                        font-size: 1.7rem;
                    }
                }
            }
        }
    }
    @media (max-width: 950px) {
        height: 65vh;
        width: 64vw;

        h1 {
            font-size: 1.4rem !important;
        }

        .hoverPanel {
            h2 {
                font-size: 2rem;
            }
            .about {
                .techUsed {
                    ul {
                        li {
                            font-size: 1.2rem;
                        }
                    }
                }
                .description {
                    p {
                        font-size: 1.3rem;
                    }
                }
                .half {
                    .title {
                        font-size: 1.5rem;
                    }
                }
            }
            .links {
                .link {
                    font-size: 2.4rem;
                }
            }
        }
    }
    @media (max-width: 795px) {
        height: 70vh;
        width: 90vw;
    }
    @media (max-width: 450px) {
        width: 90vw;

        h1 {
            font-size: 1rem !important;
        }
        .hoverPanel {
            h2 {
                font-size: 1.6rem !important;
            }

            .about {
                .description {
                    p {
                        font-size: 1.2rem;
                    }
                }
                .techUsed {
                    ul {
                        li {
                            font-size: 1rem;
                        }
                    }
                }
                .half {
                    .title {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
    @media (max-width: 350px) {
        width: 98vw;
    }

    @media (max-height: 780px) {
        height: 78vh;
        .hoverPanel {
            .about {
                .techUsed {
                    ul {
                        li {
                            line-height: 1.7rem;
                        }
                    }
                }
            }
        }
    }
    @media (max-height: 710px) {
        height: 80vh;
    }
    @media (max-height: 670px) {
        .hoverPanel {
            .title {
                font-size: 1.4rem !important;
            }
            .about {
                .half {
                    .title {
                        font-size: 1.2rem !important;
                    }
                }
                .description {
                    P {
                        font-size: 1rem;
                    }
                }
            }
           
        }
    }
    @media (max-height: 590px) {
        .hoverPanel {
            .title {
                font-size: 1.2rem !important;
            }
            .about {
                .half {
                    .title {
                        font-size: 1.02rem !important;
                    }
                }
                .description {
                    P {
                        font-size: 0.8rem;
                    }
                }
            }
           
        }
    }
`;
export default ProjectSlide;
