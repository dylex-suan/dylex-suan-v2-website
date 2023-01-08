import styled from "styled-components";

export const About = () => {
    return (
        <Wrapper id="about">
            <Greeting>Hi! I'm Dylex Suan!👋🏽</Greeting>
            <Body>
                I am currently a 3A Computer Science Student at the University of Waterloo
                and completed my third internship at <a href="https://perasoinc.com/" style={{ textDecoration: "none", color: "black" }}><b>Peraso Inc! </b></a>
                I'm currently searching for <b>Summer 2023</b> internships!<br /><br />
                I'm currently interested in backend development or DevOps, and have experience working with several web and mobile
                frameworks!<br /><br />
                I love to play piano in my free time, and I love to travel and drive to new places!
                Please feel free to reach me using my <a href="#contacts" style={{ textDecoration: "none", color: "black" }}><b>contacts</b></a> below!
            </Body>
        </Wrapper>
    )
}

const Greeting = styled.h1`
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 100px;
`;

const Wrapper = styled.div`
    max-width: 100%;
    width: 90%;
    line-height: 1.5;
    margin-top: 100px;
`;

const Body = styled.p`
    font-size: 25px;
`;