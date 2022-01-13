import styled from "styled-components";

type Props = {
    disabled: boolean;
}

export const StyledMailButton = styled.button<Props>`
    display: block;
    background: none;
    opacity: ${props => props.disabled ? "0.2" : "1"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    color: #E4E6EB;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.2em;
    padding: 10px 10px 10px 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 0.8em;
    width: 10%;
    position: relative;
    border: none;

    &::before {
        top: -2px;
        left: -2px;
        border-top: 3px solid #E4E6EB;
        border-left: 3px solid #E4E6EB;
        transition: 0.3s all;
    }

    &::before, &::after {    
        display: block;
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
    }

    &::after {
        bottom: -2px;
        right: -2px;
        border-bottom: 3px solid #E4E6EB;
        border-right: 3px solid #E4E6EB;
        transition: 0.3s all;
    }

    &:hover::before, &:hover::after {
        width: 100%;
        height: 100%;
    }

    &:hover {
        background: #E4E6EB;
        color: #0f0f0f;
        transition: 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 0.8em;
    }

    @media screen and (max-width: 320px) {
        width: 100%;
        font-size: 0.7em;
    }
`;