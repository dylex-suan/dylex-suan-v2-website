import styled from "styled-components";
import Icon from '@mui/material/Icon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {
    return (
        <ContactWrapper>
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
                Made with ❤️ using React and Material UI<br />
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
    margin: 50px 0 0 0;
    height: 100%;
    max-width: 100%;
    width: 100%;
`;

const Text = styled.p`
    font-size: 16px;
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
`;
