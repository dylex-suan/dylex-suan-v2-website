import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Project = ({ data }) => {
    return (
        <Container>
            <Image src={data.image} alt='' />
            <DescriptionWrapper>
                <Heading>
                    {data.title}
                </Heading>
                <RemoteWrapper>
                    {data.technologies.map((tech, id) => {
                        return (
                            <RemoteText>
                                <b>
                                    {tech}
                                </b>
                            </RemoteText>
                        )
                    })}
                </RemoteWrapper>
                <Description>{data.description}</Description>
                {data.gitLink && <GithubWrapper>
                    <GithubLink href={data.gitLink}>
                        <GitHubIcon />
                        <GithubText>
                            View on Github
                        </GithubText>
                    </GithubLink>
                </GithubWrapper>}
                {data.devpostLink && <DevpostWrapper>
                    <DevpostLink href={data.devpostLink}>
                        <DevpostText>
                            View on Devpost
                        </DevpostText>
                    </DevpostLink>
                </DevpostWrapper>}
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

const GithubWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const GithubLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131414;
    color: white;
    width: 60%;
    border-radius: 30px;
    text-decoration: none;
`;

const GithubText = styled.h2`
    color: white;
    font-size: 20px;
    margin: 10px;
`;

const DevpostWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
`;

const DevpostLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #003E54;
    color: white;
    width: 60%;
    border-radius: 30px;
    text-decoration: none;
`

const DevpostText = styled.h2`
    color: white;
    font-size: 20px;
    margin: 10px;
`;