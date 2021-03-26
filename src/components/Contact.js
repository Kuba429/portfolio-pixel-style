import React from "react";
import styled from "styled-components";

//components

const Contact = ({ name }) => {
    return (
        <StyledContact>
            <div className={`container ${name}`}>
                <img src={`assets/pixel/${name}.png`} alt="" />
            </div>
        </StyledContact>
    );
};

const StyledContact = styled.div`
    width: 16vw;
    height: 16vw;

    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 80%;
        }
    }

    .twitter {
        background-color: #1da1f2;
    }
    .linkedin {
        background-color: #0073b1;
    }
    .fiverr {
        background-color: #00ab2b;
    }
    .gmail {
        background-color: #f7f7f7;
    }
    .codepen {
        background-color: #000000;
    }
    .github {
        background-color: #0d2534;
    }
`;

export default Contact;
