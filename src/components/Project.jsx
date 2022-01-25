import styled from 'styled-components';

export const Project = (props) => {
    const { data } = props;
    return (
        <Container>
            <Image src={data.image} alt='' />
            <Heading>
                {data.title}
            </Heading>
            <Remote>Hello</Remote>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 900px;
    height: 300px;
    background-color: #F1EBEB;
    margin: 10px 0;
    border-radius: 50px;
`;

const Image = styled.img`
    width: 360px;
    height: 240px;
    radius: 46px;
    margin: auto 25px;
`;

const Heading = styled.h1`
    font-size: 36px;
    margin: 25px 25px;
`;

const Remote = styled.div`
    width: 120px;
    height: 40px;
    background-color: #C4C4C4;
    text-align: center;
    border-radius: 50px;
`;

const DescriptionWrapper = styled.div`

`;