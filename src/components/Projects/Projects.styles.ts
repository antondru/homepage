import styled from "styled-components";

type CardProps = {
    backgroundImage: string
}

/* Container for project section */
export const ProjectsContainer = styled.div`

`;

/* Container for card */
export const CardContainer = styled.div`
    width: 100%;
    /* border: 1px solid blue;  */
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.2em;
    grid-row-gap: 0.2em;
    /* padding: 1em 1em 1em 1em; */

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

/* The card itself */
export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 14em;
    /* width: 10em;  */
    border: 2px solid #141517;
    border-radius: 8px; 
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 35ch; // TODO: kolla denna mer... (35 characters wide)
    overflow-x: hidden;
    overflow-y: hidden;
    transition: transform 500ms ease;

    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 1200px) {
        height: 10em;
    }

    @media (max-width: 720px) {
        height: 8em;
    }
`;

/* Container for content inside the card */
export const CardContent = styled.div`
    padding: 1em;
    background: linear-gradient(
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 0.35) 20%,
        hsl(0 0% 0% / 1)
    );
    transform: translateY(55%);
    transition: transform 500ms ease;
    
    //TODO: verkar inte funka
    .card-content > * {
        opacity: 0;
    }

    ${Card}:hover & {
        transform: translateY(0);      
    }
`;

/* The card title */
export const CardTitle = styled.h2`
    width: max-content;
    font-family: 'Staatliches', cursive;
    font-size: 1.1em;
    color: white;
    position: relative;
    /* background: hsl(0 0% 0% / 0.7); */

    &::after {
        content: '';
        position: absolute;
        width: calc(100% + 1em);
        height: 3px;
        left: calc(1em * -0.9); // 0.9 so the line is "within" the card
        bottom: -2px;
        background: #FD2155;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms ease;
    }

    ${Card}:hover &::after {
        transform: scaleX(1);
    }
`;

/* The card text */
export const CardText = styled.p`
    font-size: 0.7em;
    color: white;
`;

/* The card button */
export const CardButton = styled.a`
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: white;
    background-color: #FD2155;
    padding: 0.1em 0.3em;

    &:hover {
        color: #FD2155;
        background-color: white;
    }
`;