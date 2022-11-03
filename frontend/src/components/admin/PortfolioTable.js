import React, { useState } from "react";
import moment from 'moment';

import styled from "styled-components";

import { useApi } from "../../hooks/useApi";

import PortfolioModal from "./PortfolioModal";
import PortfolioForm from "./PortfolioForm";

function PortfolioTable() {
    const actions = {
        del: {
            header: 'Excluir',
            label: 'Confirmar',
            body: 'Tem certeza que deseja deletar?'
        },
        edit: {
            header: 'Editar',
            label: 'Salvar',
            body: <PortfolioForm />
        },
        add: {
            header: 'Criar novo portfólio',
            label: 'Salvar',
            body: <PortfolioForm />
        }
    }
    const [showModal, setShowModal] = useState(false);
    const [action, setAction] = useState({});
    const { data } = useApi('/portfolio');

    function handleShow(slug, action) {
        setAction(action);
        setShowModal(true);
    }

    return (
        <PortfolioTableContainer>
            <button id='add-button' onClick={() => handleShow(null, actions.add)}>Adicionar novo portfólio</button>

            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.data?.map(project => {
                        return (
                            <tr key={project.slug}>
                                <td>
                                    <img src={project.image} alt={project.title} />
                                </td>
                                <td>{project.title}</td>
                                <td>{moment(project.createdAt).format('D-M-YYYY')}</td>
                                <td>
                                    <button onClick={() => { handleShow(project.slug, actions.edit) }}>Editar</button>
                                    <button onClick={() => { handleShow(project.slug, actions.del) }}>Excluir</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {showModal &&
                <PortfolioModal setShowModal={setShowModal} action={action}>
                    {action.body}
                </PortfolioModal>

            }

        </PortfolioTableContainer>
    )
}

const PortfolioTableContainer = styled.div`
    #add-button{
        width: 100%;
        font-size: 1rem;
        background-color: #5d88f0;
        color: yellow;
        border: none;
    }

    table{
        width: 100%;
        border-collapse: collapse;

        img{
            width: 20rem;
            border: 5px solid white;
            border-radius: .7rem;
        }

        th, td{
            padding: .5rem;
            text-align: start;
            border: 1px solid #1b1b1b;
        }

        th{
            background-color: #1b1b1b;
            color: #ccc;
        }

        td{
            button{
                padding: .3rem;
                font-size: .8rem;
                margin-left: 1rem;
                background-color: #1b1b1b;
                color: #ccc;

                :hover{
                    background-color: #ccc;
                    color: black;
                }
            }
        }

        tbody{
            tr{
                :hover{
                    background-color: #b5b5b5;
                }
            }
        }
    }
`;

export default PortfolioTable;