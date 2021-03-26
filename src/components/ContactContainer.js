import React from 'react';
import styled from 'styled-components';

//components/assets
import Contact from './Contact'
import {contactData} from '../Data'



const ContactContainer = ()=>{
    return(
        <StyledContactContainer>
            {
                contactData.map(item=>{
                    return(
                        <Contact name={item.name}/>
                    )
                })
            }
        </StyledContactContainer>
    )
}

const StyledContactContainer = styled.div`
width:100%;
display:flex;
flex-direction: row;
justify-content:space-around;
align-items:center;



`

export default ContactContainer;
