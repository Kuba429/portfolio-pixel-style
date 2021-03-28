import React from "react";
import styled from "styled-components";
import ArrowContainer from "./ArrowContainer";

//components
import ContactContainer from "./ContactContainer";

const ContactSection = () => {
    return (
        <StyledContactSection id="ContactSection">
            <h1>Find me here!</h1>
            <ContactContainer />
            <img className="avatar" src="assets/pixel-thumb.png" alt="" />
            <ArrowContainer sectionUp="AboutSection" />
        </StyledContactSection>
    );
};

const StyledContactSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 4rem;
        margin-bottom: 5rem;
    }
    .avatar {
        position: absolute;
        transform: rotateY(180deg) rotateZ(-45deg);
        top: 10%;
        left: -10px;
        height: 360px;
    }
`;

export default ContactSection;
