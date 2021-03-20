import styled, { keyframes } from "styled-components";

const pixelAnim = keyframes`
    0%{
        background-position-y: 0;

    }
    100%{
        background-position-y: -480px;

    }

`;

export const bigCardVariants = {
    initial: {
        x: "-200vw",
        y: "-50%",
    },
    animate: {
        x: "-50%",
        y: "-50%",
        transition:{
            delay: 0.4,
            duration: 0.4
        }
    },
};

export default pixelAnim;
