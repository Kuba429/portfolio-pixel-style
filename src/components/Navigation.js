import React from "react";
import styled from "styled-components";
import pixelAnim from "../animation";
const Navigation = () => {
    return (
        <StyledNavigation className="navigation">
            <a className="navItem" href="#SkillsSection">
                Skills
            </a>
            <a className="navItem" href="">
                Projects
            </a>
            <a className="navItem" href="">
                About
            </a>
            <a className="navItem" href="#ContactSection">
                Contact
            </a>
        </StyledNavigation>
    );
};
const StyledNavigation = styled.div`
    width: 80%;
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .navItem {
        text-decoration: none;
        font-size: 2rem;
        color: #5d5b6a;
        background: white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;

        box-shadow: 0 4px 4px 0px #464550;
        position: relative;
        width: 180px;
        height: 60px;
        transition: 0.5s;
        &:hover {
            color: white;
            background: #6a6e6f url("assets/pixel_2.png");
            transition-delay: 0.5s;
            background-size: 180px;
            animation: ${pixelAnim} 0.5s steps(8) forwards;
        }
    }
`;

export default Navigation;
