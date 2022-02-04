import logo from './logo.svg';
// import './App.css';
import './fonts/fonts.css';
import styled from 'styled-components';
import profile_photo from './assets/profile_photo.png';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export const App = () => {
  return (
    <Container>
      <Image src={profile_photo} alt='' />
      <About />
      <Projects />
      <Contact />
    </Container>
  )
}

const Container = styled.div`
  background: #FFF9F9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: "Open-Sans", sans-serif;
  margin: auto;
  @media (max-width: 500px) {
    width: 100%;
    padding: 25px;
  }
  @media (max-width: 400px) {
    padding: 30px;
  }
`;

const Image = styled.img`
  width: 449px;
  height: 449px;
  padding: 15px 0px;
  align-items: center;
  justify-content: center;
`;
