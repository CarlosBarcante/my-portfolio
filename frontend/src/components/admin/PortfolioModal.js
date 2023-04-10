import React from "react";

import styled from "styled-components";

function PortfolioModal({ setShowModal, action, slug, children }) {
    function handleConfirm() {
        action.callback(slug);
        setShowModal(false);
    }

    return (
        <Shadow>
            <PortfolioModalContainer>
                <div id="modal-header">
                    <button id="close" onClick={() => setShowModal(false)}></button>
                    <h1>{action.header} {slug}</h1>
                </div>
                <div id="modal-body">
                    {children}
                </div>
                <div id="modal-footer">
                    <button onClick={() => setShowModal(false)}>Cancelar</button>
                    <button onClick={handleConfirm}>{action.label}</button>
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
    top: 10vh;
    left: 15%;
    position: absolute;
    background-color: #ccc;
    padding: 1rem;
    border: 1px solid yellow;
    border-radius: 1rem;
    box-shadow: 0px 5px 14px yellow;

    #modal-header{
        h1{
            color: black;
            text-align: left;
        }
    }

    #modal-body{
        margin: 1rem 0;
        font-size: 1.5rem;
    }

    #modal-footer{
        button{
            margin-right: 1rem;
            background-color: #5d88f0;
            color: white;
            border: none;
            border-radius: .8rem;

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