import styled from "styled-components";
import { Project } from "./Project";
import { project_display } from "../data/project-display";

export const Projects = () => {
    return (
        <Wrapper>
            <Intro>What have I been working on? 💻</Intro>
            {project_display.map((data) => {
                return <Project key={data.id} data={data} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0px 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Intro = styled.h1`
    font-size: 45px;
`;