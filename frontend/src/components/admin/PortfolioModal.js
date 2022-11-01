import React from "react";

import styled from "styled-components";

function PortfolioModal() {
    return (
        <Shadow>
            <PortfolioModalContainer>
                <div id="modal-header">
                    <button id="close"></button>
                    <h1>Confirmar</h1>
                </div>
                <div id="modal-body">
                    Tem certza que deseja excluir?
                </div>
                <div id="modal-footer">
                    <button>Cancelar</button>
                    <button>Confirmar</button>
                </div>
            </PortfolioModalContainer>
        </Shadow>
    )
}

const Shadow = styled.div`
    width: 100%;
    height: 150vh;
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    top:0;
    left: 0;
    z-index: 5;
`;

const PortfolioModalContainer = styled.div`
    width: 70%;
    top: 5%;
    left: 15%;
    position: absolute;
    background-color: #ccc;
    padding: 1rem;
    border: 1px solid yellow;
    border-radius: 1rem;
    box-shadow: 0px 5px 14px yellow;

    h1{
        color: black;
        text-align: left;
    }

    #modal-body{
        margin: 1rem 0;
    }

    #modal-footer{

        button{
            margin-right: 1rem;

            :hover{
                background-color: black;
                color: #ccc;
            }
        }
    }

    #close{
        position: absolute;
        right: .5rem;
        top: 0;
        width: 2rem;
        height: 2rem;
        opacity: 0.3;
        border: none;
        padding: 0;

        :hover{
            opacity: 1;
        }

        ::before, ::after{
            position: absolute;
            left: 1rem;
            top: .5rem;
            content: ' ';
            height: 2rem;
            width: 2px;
            background-color: black;
        }

        ::before{
            transform: rotate(45deg);
        }

        ::after{
            transform: rotate(-45deg);
        }
    }

`;

export default PortfolioModal;