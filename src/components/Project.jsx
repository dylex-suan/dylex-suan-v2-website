import styled from 'styled-components';

export const Project = (props) => {
    const { data } = props;
    return (
        <Container>
            <ImageWrapper>
                <Image src={data.image} alt='' />
            </ImageWrapper>
            <DescriptionWrapper>
                <Heading>
                    {data.title}
                </Heading>
                <RemoteWrapper>
                    {data.technologies.map((tech, id) => {
                        return <Remote key={id}>
                            <RemoteText>
                                {tech}
                            </RemoteText>
                        </Remote>
                    })}
                </RemoteWrapper>
                <Description>{data.description}</Description>
            </DescriptionWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 900px;
    height: 300px;
    background-color: #F1EBEB;
    margin: 10px 0;
    border-radius: 50px;
`;

const ImageWrapper = styled.div`

`;
const Image = styled.img`
    width: 360px;
    height: 240px;
    radius: 46px;
    margin: auto 25px;
`;

const TextWrapper = styled.img`
    width: 360px;
    height: 240px;
    radius: 46px;
    margin: auto 25px;
`;

const Heading = styled.h1`
    font-size: 36px;
    align-items: center;
    ${'' /* margin: 25px 25px; */}
`;

const Remote = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    margin: 0 10px 0 0;
    background-color: #C4C4C4;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;

const DescriptionWrapper = styled.div`
    width: 450px;
`;

const Description = styled.p`
    font-size: 20px;
`;

const RemoteText = styled.p`
    font-size: 18px;
`
const RemoteWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;