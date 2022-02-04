import styled from 'styled-components';

export const Project = (props) => {
    const { data } = props;
    return (
        <a href={data.link} style={{ textDecoration: "none", color: "black" }}>
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
                                    {tech}
                                </RemoteText>
                            )
                        })}
                    </RemoteWrapper>
                    <Description>{data.description}</Description>
                </DescriptionWrapper>
            </Container>
        </a>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 960px;
    height: 300px;
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
    background-color: #5caff2;
    margin: 0px 5px 0px 0px;
    padding: 1px 5px;
    border-radius: 10%;
    font-size: 18px;
`

const RemoteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;