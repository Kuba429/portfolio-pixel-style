import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
//components/assets
import Contact from './Contact';
import { contactData } from '../Data';

const ContactContainer = () => {
    return (
        <StyledContactContainer>
            {contactData.map((item) => {
                return (
                    <Contact
                        name={item.name}
                        text={item.text}
                        link={item.link}
                        additional={item.additional}
                        key={v4()}
                    />
                );
            })}
        </StyledContactContainer>
    );
};

const StyledContactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default ContactContainer;
