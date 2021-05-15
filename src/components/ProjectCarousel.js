import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';

//glide
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';

//components
import ProjectSlide from './ProjectSlide';

const ProjectCarousel = () => {
    const glideRef = useRef(null);

    return (
        <StyledProjectCarousel>
            <Glide ref={glideRef} type="slider" perView={1} startAt={1}>
                <Fragment>
                    <ProjectSlide />
                </Fragment>
                <Fragment>
                    <ProjectSlide />
                </Fragment>
            </Glide>
        </StyledProjectCarousel>
    );
};

const StyledProjectCarousel = styled.div`
    width: 80%;
    height: 80%;

    
    .glide__slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    

    @media (max-width: 800px){
        .Glide-leftArrow, .Glide-rightArrow{
        display: none;
    }
    }
`;

export default ProjectCarousel;
