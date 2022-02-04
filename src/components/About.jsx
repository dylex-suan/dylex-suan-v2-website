import styled from "styled-components";

export const About = () => {
    return (
        <Wrapper>
            <Greeting>Hi! I'm Dylex Suan!👋🏽</Greeting>
            <Body>
                I am currently a 2B Computer Science Student at the University of Waterloo and am currently completing my internship at Prodigy!<br /><br />
                I was previously a full-stack developer at the University of Waterloo, working on the Math Faculty Question Bank for professors and teaching assistants!<br /><br />
                Fun fact, I was previously a French journalist in the Greater Toronto area, and a Student Trustee for the Halton Catholic District School Board!<br /><br />
            </Body>
        </Wrapper>
    )
}

const Greeting = styled.h1`
    font-size: 45px;
`;

const Wrapper = styled.div`
    max-width: 90%;
    line-height: 1.5;
`;

const Body = styled.p`
    font-size: 25px;
`;