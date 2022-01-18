import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
    :root {
        /* colors */
        --lightGreen: #03fcad;
        --darkGreen: #008a5f;
        --offWhite: #E4E6EB;
        --darkGrey: #0f0f0f;
        --lightGrey: #858585;
        --grey: #1a1a1a;
        --red: #FD2155;
        --white: #ffffff;
        /* fonts */
        --heading: 'Staatliches', cursive;
        --text:  "Segoe UI", Arial, sans-serif;
    }
    
    html, body {
        background: var(--grey);
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }

    p {
        margin: 0;
    }

    .page-section {
        width: 50vw;
        height: fit-content; 
        transform: translateX(300px);
        opacity: 0;
        transition: 500ms;
    }

    .page-section.show {
        transform: translateX(100px);
        opacity: 1;
    }

    /* for trapping spam (hopefully ;)) */
    #phone {
        display: none;
    }

    @media (max-width: 1024px) {
        .page-section {
            padding-left: 0;
            padding-top: 0;
            transform: translateX(50px);
            opacity: 0;
            transition: 500ms;
        }

        .page-section.show {
            transform: translateX(25px); 
            opacity: 1;
        }
    }

    @media (max-width: 320px) {
        .page-section {
            padding-left: 0;
            padding-top: 0;
            transform: translateX(-10px);
            transition: 500ms;
        }

        .page-section.show {
            transform: translateX(20px); 
            opacity: 1;
        }
    }

    /* the scroll text above the middle content div will get screwed up with windows animations off, just haven't fixed it yet. */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms 
            !important;
            animation-iteration-count: 1 
            !important;
            scroll-behavior: auto 
            !important;
            transition-delay: 0ms !important;
            transform: translateX(0) !important;
        }
    }
`;