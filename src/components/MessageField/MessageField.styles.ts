import styled from "styled-components";

export const StyledTextArea = styled.textarea`
    height: 200px;
    color: white;
    background: #171717;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #171717;
    resize: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #bca26c;
        box-shadow: 0 0 1px #bca26c;
        transition: border-color 0.5s ease-in-out;
    }

    @media screen and (max-width: 640px) {
    height: 100px;
    }
`;

export const CharacterCountDiv = styled.div`
    color: #c4c4c4;
    font-size: 0.8em;

    @media screen and (max-width: 640px) {
    font-size: 0.6em;
    }
`;