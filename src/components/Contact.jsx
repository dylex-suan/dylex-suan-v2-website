import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {
    return (
        <ContactWrapper id="contacts">
            <IconContainer>
                <IconWrapper>
                    <a href="https://www.linkedin.com/in/dylex-suan/">
                        <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
                    </a>
                    <a href="https://github.com/dylex-suan">
                        <GitHubIcon fontSize="large" sx={{ color: 'white' }} />
                    </a>
                    <a href="https://twitter.com/DylexSuan">
                        <TwitterIcon fontSize="large" sx={{ color: 'white' }} />
                    </a>
                    <a href="mailto:kdsuan@uwaterloo.ca">
                        <EmailIcon fontSize="large" sx={{ color: 'white' }} />
                    </a>
                </IconWrapper>
            </IconContainer>
            <Text>
                Made with React and Material UI<br />
                By: Dylex Suan
            </Text>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.div`
    background-color: #2e2d29;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin: auto;
    height: 100%;
    max-width: 100%;
    width: 100%;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: white;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    width: 35%;
    @media (max-width: 768px) {
        width: 50%;
    }
`;
