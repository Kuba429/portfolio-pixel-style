import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//components
import ArrowContainer from "./ArrowContainer";

const AboutSection = () => {
    return (
        <StyledAboutSection id="AboutSection">
            <h1>About me</h1>
            
            <img
                src="assets/pixel-computer.png"
                className="avatar computer"
                alt=""
            />
            <img className='avatar regular' src="assets/pixel-reg.png" alt=""/>
        <img className='avatar thumb' src="assets/pixel-thumb.png"  alt=""/>


            <div className="wrapper">
                <motion.img
                    initial={{ rotateY: 180 }}
                    whileHover={{ rotateZ: 360 }}
                    className="head"
                    src="assets/pixel-head.png"
                    alt=""
                />
                <p>
                    Hi, my name is Kuba and I'm a <b> Front End Developer.</b>{" "}
                    I'm a high school student in Poland. I got into programming
                    a few years ago by watching a random tutorial about c++. I
                    liked the idea of it and started learning more and more.{" "}
                    Eventually I stumbled upon
                    <b> html and css,</b> fell in love with it, learned
                    javacript and react along the way and now im striving to
                    become web developer in the future.{" "}
                </p>
                <p className="second">
                    {" "}
                    In my spare time i like to watch tv shows and play with my
                    dogs.
                </p>
            </div>
            <ArrowContainer
                sectionUp="SkillsSection"
                sectionDown="ContactSection"
                fromBottom="5"
            />
        </StyledAboutSection>
    );
};

const StyledAboutSection = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 5rem;
        margin: 3rem;
    }
    .avatar {
        position: absolute;
        height: 200px;
        
    }
    .computer{
        bottom: 20%;
        right: 5%;
    }
    .regular{
        left: 0px;
        height: 400px;
        transform: rotateY(180deg) rotateZ(-30deg);

    }
    .thumb{
        right: 0px;
        top: 10%;
        transform: rotateZ(-45deg);
    }
    .wrapper {
        width: 65%;
        .head {
            float: left;
            transform: rotateY(180deg);
            height: 140px;
            margin: 1rem;
            user-drag: none;
        }
        p {
            font-size: 2rem;
            margin: 1rem;
            text-align: justify;
        }
        .second {
            text-align: center;
        }
    }
`;

export default AboutSection;
