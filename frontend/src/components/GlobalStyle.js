import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-image: linear-gradient(to right, #000, #000033);
        overflow-x: hidden;
        text-decoration: none;
    }
    
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        border-radius: 7px;
        transition: all 0.5s ease;
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    
    h3{
        font-size: 1.5rem;
    }

    a{
        font-size: 1.1rem;
        text-decoration: none;
    }

    span{
        font-weight: lighter;
        color: #6699ff;
    }

    p{
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    ul{
        list-style: none;
    }
`;

export default GlobalStyle;