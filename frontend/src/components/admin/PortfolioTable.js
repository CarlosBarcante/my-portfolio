import React, { useState } from "react";
import moment from 'moment';

import styled from "styled-components";

import { useApi } from "../../hooks/useApi";

import PortfolioModal from "./PortfolioModal";

function PortfolioTable() {
    const [showModal, setShowModal] = useState(false);
    const { data } = useApi('/portfolio');

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
                            <tr>
                                <td>
                                    <img src={project.image} alt={project.title} />
                                </td>
                                <td>{project.title}</td>
                                <td>{moment(project.title).format('D-M-YYYY')}</td>
                                <td>
                                    <button>Editar</button>
                                    <button onClick={() => setShowModal(true)}>Excluir</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {showModal && <PortfolioModal />}

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