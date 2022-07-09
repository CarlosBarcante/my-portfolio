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
                <Link to='/portfolio'><li>Portifólio</li></Link>
                <Link to='/contact'><li>Contato</li></Link>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;
    background-color: #282828;
    position: sticky;
    top: 0;
    a{
        text-decoration: none;
        color: #ccc;

    }
    h1{
        font-size: 2.5rem;
    }
    ul{
        display: flex;
        a{
            margin-right: 5rem;
        }
        li{
            font-size: 1.5rem;
            &:hover{
                color: #5d88f0;
            }
        }
    }
    
`;



export default Nav;