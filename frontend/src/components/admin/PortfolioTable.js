import React, { useEffect, useState } from "react";
import moment from 'moment';

import styled from "styled-components";

import { useApi } from "../../hooks/useApi";
import { deleteItem, editItem, addItem } from '../../services/api';

import PortfolioModal from "./PortfolioModal";
import PortfolioForm from "./PortfolioForm";

function PortfolioTable() {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [image, setImage] = useState('');
    const [slug, setSlug] = useState('');
    const [techs, setTechs] = useState('');

    function handleDelete(slug) {
        deleteItem(slug);
    }

    function handleAdd(slug, data) {
        addPortfolioItem(data);
    }

    function handleEdit(slug, data) {
        editPortfolioItem(slug, data);
    }

    const actions = {
        del: {
            header: 'Excluir',
            label: 'Confirmar',
            showBody: true,
            body: 'Tem certeza que deseja deletar?',
            callback: handleDelete
        },
        edit: {
            header: 'Editar',
            label: 'Salvar',
            showBody: false,
            callback: handleEdit
        },
        add: {
            header: 'Criar novo portfólio',
            label: 'Salvar',
            showBody: false,
            callback: handleAdd
        }
    }
    const [action, setAction] = useState({});

    const [showModal, setShowModal] = useState(false);

    const { data } = useApi('/portfolio');

    function handleShow(portfolio, action) {
        setAction(action);

        if (portfolio) {
            setTitle(portfolio.title);
            setShortDescription(portfolio.description);
            setLongDescription(portfolio.longDescription);
            setImage(portfolio.image);
            setSlug(portfolio.slug);
            setTechs(portfolio.technologies);
        }

        setShowModal(true);
    }

    function addPortfolioItem(data) {
        const techs = deleteTechID(data.techs);

        const newItem = {
            title: data.title,
            description: data.shortDescription,
            longDescription: data.longDescription,
            image: data.image,
            technologies: techs
        }

        addItem(newItem);
    }

    function editPortfolioItem(slug, data) {
        const techs = deleteTechID(data.techs);

        const newItem = {
            title: data.title,
            description: data.shortDescription,
            longDescription: data.longDescription,
            image: data.image,
            technologies: techs
        }

        editItem(slug, newItem);
    }

    function deleteTechID(techs) {
        const item = techs?.map(tech => {
            delete tech._id;
            return tech;
        }) || {}

        return item;
    }

    useEffect(() => {
        if (showModal === false) {
            setTitle('');
            setShortDescription('');
            setLongDescription('');
            setImage('');
            setSlug('');
            setTechs('');
        }
    }, [showModal]);

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
                                    <button onClick={() => { handleShow(project, actions.edit) }}>Editar</button>
                                    <button onClick={() => { handleShow(project, actions.del) }}>Excluir</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {showModal &&
                <PortfolioModal setShowModal={setShowModal} action={action} slug={slug}>
                    {action.showBody && action.body}

                    {!action.showBody && <PortfolioForm
                        title={title}
                        setTitle={setTitle}
                        shortDescription={shortDescription}
                        setShortDescription={setShortDescription}
                        longDescription={longDescription}
                        setLongDescription={setLongDescription}
                        image={image}
                        setImage={setImage}
                        slug={slug}
                        setSlug={setSlug}
                        techs={techs}
                        setTechs={setTechs}
                    />}
                </PortfolioModal>

            }

        </PortfolioTableContainer>
    )
}

const PortfolioTableContainer = styled.div`
    #add-button{
        width: 100%;
        font-size: 1rem;
        background-color: #000033;
        color: #FFF;
        border: 3px solid #FFF;
        margin-bottom: .5rem;

        &:hover{
            background-color: #336699;
        }
    }

    table{
        width: 100%;
        border-collapse: collapse;

        img{
            width: 20rem;
            border: 5px solid #fff;
            border-radius: .7rem;
        }

        th, td{
            padding: .5rem;
            text-align: start;
            border: 1px solid #000;
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
                    color: #000;
                }
            }
        }

        tbody{
            tr{
                &:hover{
                    background-color: #b5b5b5;
                }
            }
        }
    }
`;

export default PortfolioTable;