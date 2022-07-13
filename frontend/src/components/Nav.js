import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

// Navegação
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <StyledNav>
            <div id="container">
                <Link to='/'><h1>Carlos Barçante</h1></Link>
                <ul>
                    <Link to='/'><li>Sobre Mim</li></Link>
                    <Link to='/portfolio'><li>Portfólio</li></Link>
                    <Link to='/contact'><li>Contato</li></Link>
                </ul>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    background-color: #282828;
    padding: .5rem 5rem;
    
    #container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
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
    }
`;



export default Nav;