import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { bigCardVariants } from "../animation";
import skillData from "../skillsData";

const SkillBigCard = ({ activeSkill, setActiveSkill }) => {
    const closeHandle = () => {
        setActiveSkill(false);
    };

    const [activeFull, setActiveFull] = useState([
        { name: "", description: "" },
    ]);

    useEffect(() => {
        skillData.forEach((item) => {
            if (item.name == activeSkill) {
                setActiveFull(item);
            }
        });
    }, [activeSkill]);
    return (
        <StyledSkillBigCard
            variants={bigCardVariants}
            initial="initial"
            animate={activeSkill != false ? "animate" : "initial"}
        >
            <div className="container">
                <h1>{activeSkill}</h1>
                <div className="description">
                    <img src={`assets/fullRes/${activeSkill}.png`} alt="" />
                    <p>description</p>
                </div>
                <p onClick={closeHandle} className="close info">
                    click me to close
                </p>
            </div>
        </StyledSkillBigCard>
    );
};

const StyledSkillBigCard = styled(motion.div)`
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    border-radius: 1px;
    background-color: white;
    color: black;
   
    .container {
        width: 100%;
        height: 100%;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            position: absolute;
            top: 2rem;
        }
        .description {
            width: 80%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            img {
                max-width: 300px;
            }
            p {
                width: 300px;
                font-size: 1.6rem;
            }
        }
        .info {
            position: absolute;
            bottom: 3%;
            opacity: 0.5;
            cursor: pointer;
            &:hover{
                opacity: 0.9;
            }
        }
    }
`;

export default SkillBigCard;
