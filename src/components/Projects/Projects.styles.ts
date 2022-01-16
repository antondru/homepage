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

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 320px) {
        width: 120%;
    }
`;

/* The card itself */
export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 14em;
    border: 2px solid var(--darkGrey);
    border-radius: 3px; 
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: auto; // TODO: kolla denna mer...
    overflow-x: hidden;
    overflow-y: hidden;
    transition: transform 500ms ease;

    &:hover, 
    &:focus-within {
        transform: scale(1.03);
    }

    @media (max-width: 1200px) {
        height: 8em;
    }

    @media (max-width: 720px) {
        height: 6em;
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
        transform: translateY(70%);
        transition: transform 500ms ease;

        ${Card}:hover & {
            transform: translateY(0);  
            transition-delay: 500ms;
        }

        ${Card}:hover & {
            transform: scale(1.03);
        }

        ${Card}:focus-within & {
            transform: translateY(0);  
            transition-delay: 500ms;
            transition-duration: 0ms;
        }
    }

    @media (max-width: 640px) {
        padding: 0.5em;
    }
`;

/* The card title */
export const CardTitle = styled.h2`
    width: max-content;
    font-family: 'Staatliches', cursive;
    font-size: 1.1em;
    color: white;
    position: relative;
    margin: 0;

    &::after {
        content: '';
        position: absolute;
        width: calc(100% + 1em);
        height: 2px;
        left: calc(1em * -0.9); // 0.9 so the line is "within" the card
        bottom: -2px;
        background: var(--lightGreen);
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

    @media (max-width: 640px) {
        font-size: 0.8em;
    }

    @media (max-width: 280px) {
        font-size: 0.6em;
    }
`;

/* The card text */
export const CardText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7em;
    color: white;

    @media (max-width: 1200px) {
        display: none;
    }
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
    border: 1px solid var(--lightGreen);
    color: white;
    border-radius: 3px; 
    background: var(--darkGrey);
    padding: 0.3em 0.3em;

    @media (hover) {
        &:hover {
            filter: drop-shadow(0 0 3px var(--lightGreen));
            transition: 0.5s ease;
        }   
    }

    @media (max-width: 872px) {
        transform: scale(0.8);
    }
`;