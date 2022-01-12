import styled from "styled-components";

export const Img = styled.img`
    height: 150px;
    width: 150px;
    border: 2px solid #FD2155;
    border-radius: 50%;
    box-shadow: 0 0 3px #FD2155; // kanske...
        
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