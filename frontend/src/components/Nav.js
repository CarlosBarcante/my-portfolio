import React from "react";
import { Link } from 'react-router-dom';

import styled from "styled-components";
import { Container } from '../styles';

function Nav() {
    return (
        <StyledNav>
            <NavContent>
                <h1>Carlos Barçante</h1>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/portfolio'><li>Portfólio</li></Link>
                </ul>
            </NavContent>
        </StyledNav>
    )
}

const NavContent = styled(Container)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: #ccc;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;

        a{
            color: #ccc;
        }
        li{
            font-size: 1.1rem;
            font-weight: 300;
        }

        @media (max-width: 600px) {
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: .5rem;
        }
    }
`;

const StyledNav = styled.nav`
    height: 3rem;
    background-color: #000;
    position: sticky;
    top: 0;
    z-index: 3;
    
`;



export default Nav;