import styled from "styled-components";

export const StyledIconLink = styled.a`
    font-size: 1.8em;
    text-decoration: none;
    color: var(--offWhite);
    
    @media (hover) {
        &:hover {
            color: var(--lightGreen);
            transition: 0.5s ease-in-out;
        }
    }

    @media (max-width: 640px) {
        font-size: 1.8em;
    }
`;

export const DescriptionText = styled.p`
    font-size: 0.7em;
    color: var(--lightGreen);
    font-family: var(--text);

    @media (max-width: 640px) {
        font-size: 0.7em;
    }
`;

export const IconDiv = styled.div`
    justify-items: center;
    display: grid;
`;