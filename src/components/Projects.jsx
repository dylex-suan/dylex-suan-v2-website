import styled from "styled-components";
import { Project } from "./Project";
import { project_display } from "../data/project-display";

export const Projects = () => {
    return (
        <Wrapper id="projects">
            <Intro>Projects 💻</Intro>
            <ProjectWrapper>
                {project_display.map((data) => {
                    return <Project key={data.id} data={data} />
                })}
            </ProjectWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 1000px;
    width: 100%;
`;

const Intro = styled.h1`
    font-size: 45px;
    margin-top: 100px;
`;

const ProjectWrapper = styled.div`
    margin: auto;
    @media (max-width: 900px) {
        width: 100%;
    }
`