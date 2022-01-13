import styled from "styled-components";

type CardProps = {
    backgroundImage: string
}

/* Container for project section */
export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 1em;
`;

/* Container for card */
export const CardContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.2em;
    grid-row-gap: 0.2em;

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

    &:hover, 
    &:focus-within {
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
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    background: linear-gradient(
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 0.25), 25%,
        hsl(0 0% 0% / 0.5) 50%,
        hsl(0 0% 0% / 0.75) 75%,
        hsl(0 0% 0% / 1)
    );
    
    /* If the device is able to hover (like with a mouse), card animations will "play" */
    @media (hover) {
        transform: translateY(55%);
        transition: transform 500ms ease;

        ${Card}:hover & {
            transform: translateY(0);  
            transition-delay: 500ms;
        }

        ${Card}:focus-within & {
            transform: translateY(0);  
            transition-delay: 500ms;
            transition-duration: 0ms;
        }
    }
`;

/* The card title */
export const CardTitle = styled.h2`
    width: max-content;
    font-family: 'Staatliches', cursive;
    font-size: 1.1em;
    color: white;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: calc(100% + 1em);
        height: 2px;
        left: calc(1em * -0.9); // 0.9 so the line is "within" the card
        bottom: -2px;
        background: #FD2155;
        transform-origin: left;
        transition: transform 300ms ease;
    }

    @media (hover) {
        ${Card}:hover &::after,
        ${Card}:focus-within &::after {
            transform: scaleX(1);
        }
        
        &::after {
            transform: scaleX(0);
        }
    }
`;

/* The card text */
export const CardText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7em;
    color: white;
`;

/* The card button */
export const CardButton = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7em;
    text-align: center;
    width: 3em;
    justify-content: right;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: white;
    /* border: 1px solid #FD2155; */
    border-radius: 3px; 
    background: #FD2155;
    padding: 0.3em 0.3em;

    /* TODO: Fixa hovereffect på knappen */
    &:hover {
    }
`;