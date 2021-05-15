import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
//components
import styled from "styled-components";
import Navigation from "./Navigation";
import ArrowContainer from "./ArrowContainer";

import pixelAnim from "../animation";

const WelcomePage = () => {
    return (
        <StyledWelcomePage id="Welcome">
            <Navigation />
            <motion.img
                initial={{ x: "-100vw", scaleX: -1 }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0.4,
                }}
                className="avatar pixel"
                src="assets/pixel-reg.png"
                alt=""
            />
            <div className="container">
                <Typed
                    className="typed"
                    strings={["Hi", "Hello", "Welcome"]}
                    loop
                    typeSpeed={100}
                    backDelay={2000}
                    backSpeed={90}
                />
                <h1 className="hello"> my name is Kuba</h1>
            </div>
            <p>
                Welcome to my portfolio website.
                <br />
                You can access each section of this website
                <br /> via buttons above{" "}
                <span className="desktopOnly"> or arrow below</span>
            </p>
            <ArrowContainer sectionDown="Skills" sectionUp={false} />
        </StyledWelcomePage>
    );
};
const StyledWelcomePage = styled.section`
    width: 100vw;
    height: 100vh;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
        height: 400px;
        transform: scaleX(-1);
        position: absolute;
        z-index: -1;
        left: 3%;
    }
    .hello {
        width: 100%;
        text-align: center;
        font-size: 4rem;
    }
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        /* flex-wrap: wrap; */
        margin: 2rem;
        .typed {
            font-size: 6rem;
            color: #ceccdb;
            /* color: white; */
            font-weight: bold;
        }
    }
    p {
        font-size: 2.3rem;
        text-align: center;
        width: 70%;
    }

    @media (max-width: 1350px) {
        .hello {
            font-size: 3rem;
            .typed {
                font-size: 5rem;
            }
        }
        p {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 1050px) {
        .avatar {
            height: 300px;
        }
        .container {
            flex-direction: column;

            .typed {
                width: 100%;
                text-align: center;
            }
        }
        .hello {
        }
    }
    @media (max-width: 800px) {
        .avatar {
            height: 180px;
            position: static;
            margin: 1rem;
            order: 2;
        }
        .container {
            order: 1;
            margin: 0px;
        }
        p {
            width: 95%;
            order: 4;
            font-size: 1.3rem;
        }
    }

    @media (max-width: 480px) {
        .container {
            .typed {
                font-size: 4rem;
            }
        }
        .hello {
            font-size: 2.4rem;
        }
        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 350px) {
        .avatar {
            height: 140px;
        }
    }

    @media (max-width: 330px) {
        .container {
            h1 {
                font-size: 2rem;
            }
            p {
                font-size: 0.6rem;
            }
            .typed {
                font-size: 3rem;
            }
        }
        .avatar {
            height: 120px;
        }
    }

    @media (max-width: 800px) {
        .desktopOnly {
            display: none;
        }
    }
`;

export default WelcomePage;
