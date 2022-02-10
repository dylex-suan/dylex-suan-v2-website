import styled from 'styled-components';
export default function ButtonNavbar() {
    return (
        <LinkWrapper id="myTopnav" className="topnav">
            <Links className="item" href="#about">
                <b>
                    Home
                </b>
            </Links>
            <Links className="item" href="#projects">
                <b>
                    Projects
                </b>
            </Links>
            <Links className="item" href="#experience">
                <b>
                    Experience
                </b>
            </Links>
            <Links className="item" href="#resume">
                <b>
                    Resumé
                </b>
            </Links>
            <Links className="item" href="#contacts">
                <b>
                    Contacts
                </b>
            </Links>
            <Icon href="javascript:void(0);" className="icon">
                <i className="fa fa-bars"></i>
            </Icon>
        </LinkWrapper>
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

const Icon = styled.a`
    display: none;
    @media (max-width: 600px) {
        float: right;
        display: block;
    }
`