import styled from "styled-components";

type Props = {
    disabled: boolean;
}

export const StyledMailButton = styled.button<Props>`
    border: none;
    background: none;
    opacity: ${props => props.disabled ? "0.2" : "1"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    color: #08fdd8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px;
    border: 1px solid #08fdd8;
    border-radius: 3px;
    font-family: monospace;
    font-weight: 600;
    font-size: 16px;

    &:hover {
        filter: drop-shadow(0 0 8px #08fdd8);
        transition: 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        padding: 10px;
        font-size: 12px;
    }

    @media screen and (max-width: 320px) {
        padding: 4px;
        font-size: 12px;
    }
`;