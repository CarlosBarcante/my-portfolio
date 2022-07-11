import React from "react";
import styled from "styled-components";

// Navegação
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <StyledNav>
            <Link to='/'><h1>Carlos Barçante</h1></Link>
            <ul>
                <Link to='/'><li>Sobre Mim</li></Link>
                <Link to='/portfolio'><li>Portfólio</li></Link>
                <Link to='/contact'><li>Contato</li></Link>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    padding: .5rem 2rem;
    justify-content: space-around;
    align-items: center;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 3;
    a{
        text-decoration: none;
        color: #ccc;

    }
    h1{
        font-size: 2rem;
        font-weight: 600;
    }
    ul{
        display: flex;
        a{
            margin-right: 5rem;
        }
        li{
            font-size: 1.3rem;
            font-weight: 300;
            &:hover{
                color: #5d88f0;
            }
        }
    }
    
`;



export default Nav;