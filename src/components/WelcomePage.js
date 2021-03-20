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
        <StyledWelcomePage id='WelcomeSection'>
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

            <h1 className="hello">Hi, my name is Kuba</h1>

            <p>
                Welcome to my portfolio website.
                <br />
                You can access each section of this website
                <br /> via buttons above or arrow below
            </p>
            <ArrowContainer sectionDown='SkillsSection' sectionUp={false}/>
        </StyledWelcomePage>
    );
};
const StyledWelcomePage = styled.section`
    width: 100vw;
    height: 100vh;

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
        font-size: 6rem;
        margin: 2rem;
        .typed {
            color: #ceccdb;
        }
    }
    p {
        font-size: 2.3rem;
        text-align: center;
        width: 70%;
    }
    
`;

export default WelcomePage;
