import styled from 'styled-components';

export default function ButtonNavbar() {
    return (
        <LinkWrapper>
            <Links class="item" href="#about">
                <b>
                    Home
                </b>
            </Links>
            <Links class="item" href="#projects">
                <b>
                    Projects
                </b>
            </Links>
            <Links class="item" href="#experience">
                <b>
                    Experience
                </b>
            </Links>
            <Links class="item" href="#resume">
                <b>
                    Resumé
                </b>
            </Links>
            <Links class="item" href="#contacts">
                <b>
                    Contacts
                </b>
            </Links>
            <Links class="icon">
                <i class="fa fa-bars"></i>
            </Links>
        </LinkWrapper>
    )
}

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    overflow: auto;
    margin: auto;
    border-style: solid;
    border-width: 0 0 3px;
    background-color: #FFF9F9;
    z-index: 99;

   &:last-child {
        display: none;
    }
    @media (max-width: 600px) {
        &.responsive {
            position: relative;
        }
    }
`;

const Links = styled.a`
    float: left;
    text-align: center;
    padding: 12px;
    color: black;
    text-decoration: none;
    font-size: 17px;

    ${'' /* &:last-child {
        display: none;
    } */}

    @media (max-width: 600px) {
        &:not(:last-child) {
            display: none;
        }
        &.icon {
            float: right;
            display: block;
        }
        &.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
`