import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//components

import { contactBlockVariants } from '../animation';

const Contact = ({ name, text, link, additional }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledContact
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTapStart={() => setIsHovered(true)}
            onTapCancel={() => setIsHovered(false)}
        >
            <motion.div
                initial="initial"
                animate={isHovered ? 'hover' : 'initial'}
                className={`container ${name}`}
            >
                <img src={`assets/pixel/${name}.png`} alt={`${name} logo`} />
                <motion.div
                    variants={contactBlockVariants}
                    className="cover"
                    onClick={() => {
                        setIsHovered(false);
                    }}
                >
                    <h4 className="name">{name}</h4>
                    {additional && <h5 className="additional">{additional}</h5>}
                    <a href={link} target="_blank">
                        <h3>{text}</h3>
                    </a>
                </motion.div>
            </motion.div>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
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
            .additional {
                text-align: center;
            }
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

    @media (max-width: 800px) {
        width: 33.33333vw;
        height: 33vw;
        .container {
            .cover {
                .additional {
                    font-size: 0.8rem !important;
                }
                .name {
                    font-size: 1.6rem;
                }
            }
        }
    }
    @media (max-width: 1450px) {
        .container {
            .cover {
                a {
                    h3 {
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
    @media (max-width: 1250px) {
        .container {
            .cover {
                a {
                    h3 {
                        font-size: 1.3rem;
                    }
                }
            }
        }
    }

    @media (max-width: 1150px) {
        .container {
            .cover {
                .additional {
                    font-size: 0.6rem;
                }
                .name {
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        .container {
            .cover {
                .additional {
                    font-size: 0.4rem;
                }
                a {
                    padding: 8px;
                    h3 {
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    @media (max-width: 620px) {
        .container {
            .cover {
                .additional {
                    font-size: 0.4rem !important;
                }
                .name {
                    font-size: 1.1rem;
                }
            }
        }
    }

    @media (max-width: 450px) {
        .container {
            .cover {
                a {
                    padding: 5px;
                }
                .additional {
                    font-size: 0.4rem !important;
                }
                .name {
                    font-size: 0.9rem;
                }
            }
        }
    }
    @media (max-width: 350px) {
        .container {
            .cover {
                a {
                    padding: 1px;
                    h3 {
                        font-size: 0.9rem;
                    }
                }
                .additional {
                    font-size: 0.4rem !important;
                }
                .name {
                    font-size: 0.9rem;
                }
            }
        }
    }
    @media (max-width: 270px) {
        .container {
            .cover {
                a {
                    padding: 1px;
                    h3 {
                        font-size: 0.6rem;
                    }
                }
                .additional {
                    font-size: 0.2rem !important;
                }
                .name {
                    font-size: 0.7rem;
                }
            }
        }
    }
`;

export default Contact;
