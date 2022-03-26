import './fonts/fonts.css';
import styled from 'styled-components';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import ButtonNavbar from './components/ButtonNavbar';
import { Resumé } from './components/Resumé';
import { Experience } from './components/Experience';

export const App = () => {
  return (
    <AppContainer>
      <NavbarContainer>
        <ButtonNavbar />
      </NavbarContainer>
      <DescriptionContainer id="rise-up">
        <About />
        <Experience />
        <Projects />
        <Resumé />
        <Contact />
      </DescriptionContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  scroll-behavior: smooth;
`;

const NavbarContainer = styled.div`
  @keyframes fadeInDownOpacity {
    0% {
      opacity: 0;
      transform: translateY(-25px);
    }
    100% {
      opacity: 1;
    }
  }

  animation: 2s ease-in 0s 1 fadeInDownOpacity;
`;

const DescriptionContainer = styled.div`
  background: #FFF9F9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: "Open-Sans", sans-serif;
  height: 100%;
  min-width: 400px;
  z-index: 2;
  @media (max-width: 500px) {
    width: 100%;
  }

 @keyframes fadeInUpOpacity {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
    }
  }

  animation: 2s ease-in 0s 1 fadeInUpOpacity;
`;

