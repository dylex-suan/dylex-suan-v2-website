import styled from 'styled-components';

export const Experience = () => {
    return (
        <Container id="experience">
            <Heading>
                Work Experience
            </Heading>
            <Timeline>
                <TimelineContainer>
                    <Content>
                        <h1>Full Stack Developer @ Prodigy Education Inc.</h1>
                        <Description>Tools: JavaScript, React/Redux, Jest</Description>
                        <Description>Currently working on the Memberships Team, managing the company's membership landing pages,
                            purchase flow and post-purchase flow</Description>
                        <Date>January 2022 - present</Date>
                    </Content>
                </TimelineContainer>
                <TimelineContainer>
                    <Content>
                        <h1>Full Stack Developer @ University of Waterloo</h1>
                        <Description>Tools: JavaScript, React/Redux, Node, Express, PostgreSQL, Docker</Description>
                        <ul>
                            <Bullet>Built the Math Faculty Question Bank, where professors can save questions and assignments in LaTeX format to be used
                                in over 200 courses</Bullet>
                            <Bullet>Reduced time of creating questions and assignments by up to 50%</Bullet>
                        </ul>
                        <Date>May 2022 - August 2022</Date>
                    </Content>
                </TimelineContainer>
            </Timeline>
        </Container>
    )

}

const Heading = styled.h1`
    text-align: center;
    font-size: 45px;
    width: 100%;
    @media (max-width: 600px) {
        margin-top: 200px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    width: 100%;
`;

const Timeline = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0;

    &:after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: black;
        top: 0;
        bottom: 0;
        left: 0%;
        margin-left: -3px;
    }

    @media (max-width: 1000px) {
        &:after {
            left: 1%;
        }
    }
`;

const TimelineContainer = styled.div`
    background-color: inherit;
    max-width: 100%; 
    left: 30%;
    z-index: 3;

    @media (max-width: 1000px) {
        left: 40%;
        &:after {
            left: 15%;
        }
    }
    @media (max-width: 768px) {
        &:after {
            left: 15%;
        }
    }
`;

const Content = styled.div`
    padding: 20px 30px;
    background-color: #FFF9F9;
    position: relative;
    border-radius: 6px;
`;

const Description = styled.p`
    font-size: 25px;
`

const Date = styled.p`
    font-size: 20px;
`

const Bullet = styled.li`
    font-size: 25px;
`;