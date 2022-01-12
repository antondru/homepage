import styled from "styled-components";

type Props = {
    disabled: boolean;
}

export const StyledMailButton = styled.button<Props>`
    display: block;
    background: none;
    opacity: ${props => props.disabled ? "0.2" : "1"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    color: #08fdd8;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.2em;
    padding: 10px 10px 10px 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    width: 10%;
    position: relative;
    border: none;

    &::before {
        top: -2px;
        left: -2px;
        border-top: 2px solid #08fdd8;
        border-left: 2px solid #08fdd8;
        transition: 0.3s all;
    }

    &::before, &::after {    
        display: block;
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
    }

    &::after {
        bottom: -2px;
        right: -2px;
        border-bottom: 2px solid #08fdd8;
        border-right: 2px solid #08fdd8;
        transition: 0.3s all;
    }

    &:hover::before, &:hover::after {
        width: 102%;
        height: 102%;
    }

    &:hover {
        background: #08fdd8;
        color: #181a1c;
        transition: 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 12px;
    }

    @media screen and (max-width: 320px) {
        width: 100%;
        font-size: 10px;
    }
`;