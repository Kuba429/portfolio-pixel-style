import React from "react";
import styled from "styled-components";
import ArrowContainer from "./ArrowContainer";

//components
import ContactContainer from './ContactContainer'


const ContactSection = () => {
    return (
        <StyledContactSection id="ContactSection">
            <h1>Find me here!</h1>
            <ContactContainer/>
            <ArrowContainer sectionUp="SkillsSection" />
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
    }
`;

export default ContactSection;
