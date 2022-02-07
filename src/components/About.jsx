import styled from "styled-components";

export const About = () => {
    return (
        <Wrapper id="about">
            <Greeting>Hi! I'm Dylex Suan!👋🏽</Greeting>
            <Body>
                I am currently a 2B Computer Science Student at the University of Waterloo
                and am currently completing my second internship at <a href="https://www.prodigygame.com/main-en/" style={{ textDecoration: "none", color: "black" }}><b>Prodigy Education!</b></a><br /><br />
                I love to play piano in my free time, and I love to travel and drive to new places!
                Please feel free to reach me using my <a href="#contacts" style={{ textDecoration: "none", color: "black" }}><b>contacts</b></a> below!
            </Body>
        </Wrapper>
    )
}

const Greeting = styled.h1`
    font-size: 45px;
    margin-top: 100px;
`;

const Wrapper = styled.div`
    max-width: 100%;
    width: 90%;
    line-height: 1.5;
    margin: 100px 0;
`;

const Body = styled.p`
    font-size: 25px;
`;