import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import {v4} from 'uuid'

//glide
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';

//components
import ProjectSlide from './ProjectSlide';
//data
import { projectData } from '../Data';

const ProjectCarousel = () => {
    const glideRef = useRef(null);

    return (
        <StyledProjectCarousel>
            <Glide ref={glideRef} type="slider" perView={1} startAt={0}>
                {projectData.map((project) => {
                    return (
                        <Fragment key={v4()} >
                            <ProjectSlide project={project} />
                        </Fragment>
                    );
                })}
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

    @media (max-width: 800px) {
        width: 98%;
        height: 90%;
        .Glide-leftArrow,
        .Glide-rightArrow {
            display: none;
        }
    }
`;

export default ProjectCarousel;
