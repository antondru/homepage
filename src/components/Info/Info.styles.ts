import styled from "styled-components";

export const Img = styled.img`
    height: 150px;
    width: 150px;
    border: 3px solid #0f0f0f;
    border-radius: 50%;
        
    @media (max-width: 640px) {
        height: 75px;
        width: 75px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2em;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

// In lack of a better name...
export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`;

export const IconContainer = styled.div`
    width: 75%;
    display: grid;
    gap: 0em;
    grid-template-columns: 1fr 1fr;
`;

export const ImageContainer = styled.div`

`;