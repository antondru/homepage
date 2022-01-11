import styled from "styled-components";

export const StyledTextArea = styled.textarea`
    height: 200px;
    color: white;
    background: #141517;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #141517;
    resize: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #08fdd8;
        box-shadow: 0 0 1px #08fdd8;
        transition: border-color 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        height: 100px;
    }
`;

export const CharacterCountDiv = styled.div`
    color: #c4c4c4;
    font-size: 0.8em;

    @media screen and (max-width: 1024) {
    font-size: 0.6em;
    }
`;