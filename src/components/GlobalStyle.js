import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1300px) {
        font-size: 75%;
    }
}

body {
    background: #1b1b1b;
    overflow-x: hidden;
    font-family: 'Kanit', sans-serif; 
}

h2 {
    font-weight: 500;
    font-size: 3rem;
}

h3 {
    color: #ffffff
}

p {
    font-weight: 300;
    font-size: 2rem
}


`;

export default GlobalStyle;
