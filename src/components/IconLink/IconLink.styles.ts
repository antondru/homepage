import styled from "styled-components";

export const StyledIconLink = styled.a`
    font-size: 2.5em;
    text-decoration: none;
    color: #bca26c;
    
    &:hover {
        filter: drop-shadow(0 0 8px #bca26c);
        transition: 0.5s ease-in-out;
    }

    @media (max-width: 640px) {
        font-size: 1.8em;
    }
`;

export const DescriptionText = styled.p`
    font-size: 0.8em;
    color: #E4E6EB;

    @media (max-width: 640px) {
        font-size: 0.7em;
    }
`;