import styled from "styled-components";

export const StyledIconLink = styled.a`
    font-size: 2em;
    text-decoration: none;
    color: #08fdd8;
    
    &:hover {
        filter: drop-shadow(0 0 8px #08fdd8);
        transition: 0.5s ease-in-out;
    }

    @media (max-width: 640px) {
        font-size: 1.8em;
    }
`;

export const DescriptionText = styled.p`
    font-size: 0.7em;
    color: #E4E6EB;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 640px) {
        font-size: 0.7em;
    }
`;

export const IconDiv = styled.div`
    justify-items: center;
    display: grid;
`;