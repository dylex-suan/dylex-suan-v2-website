import styled from "styled-components";

export const About = () => {
    return (
        <Wrapper>
            <Greeting>Hi! My name is Dylex Suan!</Greeting>
            <Body>
                I am currently a 2B Computer Science Student at the University of Waterloo and am currently completing my second internship at Prodigy Game Education!<br /><br />

                I was previously a full-stack developer at the University of Waterloo, working on the Math Faculty Question Bank for professors and teaching assistants!<br /><br />

                Fun fact, I was previously a French journalist in the Greater Toronto area, and a Student Trustee for the Halton Catholic District School Board!<br /><br />

                {/* In my free time, I like to
                play piano 🎹
                read 📚
                learn languages! */}
            </Body>
        </Wrapper>
    )
}

const Greeting = styled.h1`
    font-size: 45px;
`;

const Wrapper = styled.div`
    padding: 0px 200px;
    line-height: 1.5;
`;

const Body = styled.p`
    font-size: 25px;
`;