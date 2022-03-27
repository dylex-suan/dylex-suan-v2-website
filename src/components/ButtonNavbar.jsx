import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function ButtonNavbar() {
    return (
        <Navbar expand="lg" className="position-fixed">
            <Container className="navbar">
                <Navbar.Brand href="#about">Dylex Suan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">Home</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


const LinkWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: right;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    overflow: hidden;
    margin: auto;
    border-style: solid;
    border-width: 0 0 3px;
    background-color: #FFF9F9;
    z-index: 5;
    @media (max-width: 600px) {
        flex-direction: column;
        border-width: 0 0 3px;
        height: 225px;
        overflow: hidden;
    }

`;

const Links = styled.a`
    float: left;
    display: block;
    text-align: center;
    padding: 12px;
    color: black;
    text-decoration: none;
    font-size: 17px;
    @media (max-width: 600px) {
        float: right;
    }

`;
