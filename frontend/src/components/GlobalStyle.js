import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #1b1b1b;
        overflow-x: hidden;
        text-decoration: none;
    }
    
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        color: #5d88f0;
        border: 2px solid #5d88f0;
        border-radius: 4px;
        transition: all 0.5s ease;
        &:hover{
            background-color: #5d88f0;
            color: black;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: yellow;
    }
    
    h3{
        color: #5d88f0;
        font-size: 1.5rem;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;
        color: #5d88f0;
    }

    p{
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    ul{
        list-style: none;
    }
`;

export default GlobalStyle;