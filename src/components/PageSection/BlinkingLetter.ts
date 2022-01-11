import styled from "styled-components";

export const BlinkingLetter = styled.span`
    color: #FD2155;
    animation: animate 0.7s linear infinite;
    text-shadow: 0 0 5px #FD2155;

    @keyframes animate {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0.7;
        }

        100% {
            opacity: 0;
        }
    }
`;