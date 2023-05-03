import React from 'react';

import styled from 'styled-components';

function Welcome() {
    return (
        <Card>
            <h2>Bem Vindo!</h2>
            <h3>Total de itens no portfólio:</h3>
            <p>4</p>
        </Card>
    )
}

const Card = styled.div`
    background-color: #000033bb;
    margin: -.25rem;
    padding: 1rem 1rem;

    h2{
        color: #00ff00;
        font-size: 2.5rem;
        font-weight: bolder;
        text-align: center;
        margin-bottom:1rem;
    }
    h3{
        color: #000033;
        font-size: 2rem;
        font-weight: bolder;
    }
    p{
        font-size: 10rem;
        text-align: center;
        color: #000033;
    }
`;

export default Welcome;