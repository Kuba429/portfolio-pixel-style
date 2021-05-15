import React from 'react';
import styled from 'styled-components';

//components
import ArrowContainer from './ArrowContainer';
import ProjectCarousel from './ProjectCarousel'

const ProjectsSection = () => {
    return (
        <StyledProjectsSection id="Projects">
        <h1 className='sectionName'>My Projects</h1>

            <ProjectCarousel/>
            <ArrowContainer sectionUp="Contact" sectionDown={false} fromBottom='3' />
        </StyledProjectsSection>
    );
};

const StyledProjectsSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 4rem;
        margin-bottom: 2rem;
        text-align: center;
    }


    @media (max-width: 800px){
        h1{
            font-size: 3rem;
        }
    }
    @media (max-width: 500px){
        h1{
            font-size: 2rem;
        }
    }

    
`;

export default ProjectsSection;
