import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//components

import { contactBlockVariants } from "../animation";

const Contact = ({ name, text, link, additional }) => {
    return (
        <StyledContact>
            <motion.div
                initial="initial"
                animate="initial"
                whileHover="hover"
                className={`container ${name}`}
            >
                <img src={`assets/pixel/${name}.png`} alt={`${name} logo`} />
                <motion.div variants={contactBlockVariants} className="cover">
                    <h4 className="name">{name}</h4>
                    {additional && <h5>{additional}</h5>}
                    <a href={link}>
                        <h3>{text}</h3>
                    </a>
                </motion.div>
            </motion.div>
        </StyledContact>
    );
};

const StyledContact = styled.div`
    width: 16vw;
    height: 16vw;

    display: flex;
    justify-content: center;
    align-items: center;
    user-drag: none;
    overflow: hidden;
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        user-drag: inherit;
        .cover {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            backdrop-filter: blur(6px);
            background-color: #4e5352be;
            .name {
                font-size: 2rem;
            }
            a {
                text-decoration: underline;
                color: #8c8c8c;
                background-color: white;
                padding: 10px;
                h3 {
                    font-size: 2rem;
                }
            }
        }
        img {
            height: 80%;
            user-drag: inherit;
            user-select: none;
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
