import styled from 'styled-components';

export const Resumé = () => {
    return (
        <Container>
            <Heading id="resume">Want a copy of my resumé?</Heading>
            <Description>Please send me a message either on <b>
                <Link href="https://github.com/dylex-suan">
                    Linkedin
                </Link>
            </b> or via <b><Link href="mailto:kdsuan@uwaterloo.ca">e-mail</Link></b>!
            </Description>
        </Container>
    )
}

const Container = styled.div`
    display: block;
    text-align: center;
    max-width: 100%;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    margin: 50px;
`;

const Heading = styled.h1`
    font-size: 45px;
`;

const Description = styled.p`
    font-size: 25px;
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;