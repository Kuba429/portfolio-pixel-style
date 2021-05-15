import { keyframes } from "styled-components";

const pixelAnim = keyframes`
    0%{
        background-position-y: 0;

    }
    100%{
        background-position-y: -480px;

    }

`;

export const contactBlockVariants = {
    initial: {
        y: '100%',
    },
    hover: {
        y: 0,
        transition:{
            type: 'ease',
        }
    },
};

export const bigCardVariants = {
    initial: {
        x: "-130vw",
        y: "-50%",
    },
    animate: {
        x: "-50%",
        y: "-50%",
        transition: {
            delay: 0.1,
            duration: 0.9,
        },
    },
};

export const arrowVariants = {
    initialDown: { rotateX: 180 },
    initial: {},
    animateDown: {
        rotateX: 180,
    },
    animate: {},
    whileTap: {
        scale: 0.4,
    },
};

export default pixelAnim;
