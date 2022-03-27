import styled, { css } from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Project = ({ data }) => {
    const { image, title, technologies, description, gitLink, devpostLink } = data;
    return (
        <Container>
            <Image src={image} alt='' />
            <DescriptionWrapper>
                <Heading>
                    {title}
                </Heading>
                <RemoteWrapper>
                    {technologies.map((tech, id) => {
                        return (
                            <RemoteText>
                                <b>
                                    {tech}
                                </b>
                            </RemoteText>
                        )
                    })}
                </RemoteWrapper>
                <Description>{description}</Description>
                {gitLink && <SeeProjectWrapper>
                    <GithubLink href={gitLink}>
                        <GitHubIcon />
                        <GenericRoundText>
                            View on Github
                        </GenericRoundText>
                    </GithubLink>
                </SeeProjectWrapper>}
                {devpostLink && <SeeProjectWrapper>
                    <DevpostLink href={devpostLink}>
                        <GenericRoundText>
                            View on Devpost
                        </GenericRoundText>
                    </DevpostLink>
                </SeeProjectWrapper>}
            </DescriptionWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 960px;
    height: 100%;
    background-color: #F1EBEB;
    margin: 30px 0;
    border-radius: 50px;
    @media (max-width: 900px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;

const Image = styled.img`
    width: 360px;
    height: 240px;
    radius: 46px;
    margin: 25px;
    @media (max-width: 500px) {
        width: 300px;
        height: 200px;
    }
`;


const Heading = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-top: 30px;
    @media (max-width: 500px) {
        font-size: 30px;
    }
`;

const DescriptionWrapper = styled.div`
    width: 450px;
    @media (max-width: 900px) {
        width: 400px;
    }
    @media (max-width: 500px) {
        width: 350px;
    }
`;

const Description = styled.p`
    font-size: 20px;
    margin-top: 10px;
`;

const RemoteText = styled.p`
    background-color: #28a684;
    margin: 0 5px 0 0;
    padding: 1px 5px;
    border-radius: 30px;
    font-size: 18px;
`

const RemoteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;

const SeeProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
`;

const GenericLink = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 60%;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        transform: translateY(-5px);
    }
`

const GenericRoundText = styled.h2`
    color: white;
    font-size: 20px;
    margin: 10px;
`

const GithubLink = styled.a`
    ${GenericLink}
    background-color: #131414;
`;

const DevpostLink = styled.a`
    ${GenericLink}
    background-color: #003E54;
`
