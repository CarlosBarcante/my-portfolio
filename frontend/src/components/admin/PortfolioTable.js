import React, { useState } from "react";
import moment from 'moment';

import styled from "styled-components";

import { useApi } from "../../hooks/useApi";

import PortfolioModal from "./PortfolioModal";

function PortfolioTable() {
    const actions = {
        del: {
            header: 'Excluir',
            label: 'Confirmar'
        },
        edit: {
            header: 'Editar',
            label: 'Salvar'
        },
        add: {
            header: 'Criar novo portfólio',
            label: 'Salvar'
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

            {showModal && <PortfolioModal setShowModal={setShowModal} action={action} />}

        </PortfolioTableContainer>
    )
}

const PortfolioTableContainer = styled.div`
    table{
        width: 100%;
        border-collapse: collapse;

        img{
            width: 20rem;
            border: 3px solid white;
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