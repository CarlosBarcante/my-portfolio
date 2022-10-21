import React from "react";
import { Link } from 'react-router-dom';

import styled from "styled-components";

function Nav() {
    return (
        <StyledNav>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/portfolio'><li>Portfólio</li></Link>
                <Link to='/contact'><li>Contato</li></Link>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 3;
    
    
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;

        a{
            color: #ccc;
        }
        li{
            font-size: 1.3rem;
            font-weight: 300;
        }

        @media (max-width: 600px) {
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: .5rem;
        }
    }
`;



export default Nav;