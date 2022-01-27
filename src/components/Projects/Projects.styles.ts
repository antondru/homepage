import styled from "styled-components";

/* Container for project section */
export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

/* Container for card */
export const CardContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 320px) {
        width: 105%;
    }
`;

