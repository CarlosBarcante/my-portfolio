import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PortfolioForm(props) {
    const [type, setType] = useState('');
    const [icon, setIcon] = useState('');
    const [label, setLabel] = useState('');

    function handleRemoveItem(event, id) {
        event.preventDefault();

        const newTechs = props.techs.filter(tech => tech._id !== id);
        props.setTechs(newTechs);
    }

    function handleAddItem(event) {
        event.preventDefault();

        if (!type || !icon || !label) {
            alert('Não possúi informação suficiente para adicionar um card, verifique os campos.');
            return;
        }

        const newId = Math.random().toString(36).substring(7);
        const newTech = {
            iconType: type,
            icon,
            label,
            _id: newId
        }

        props.setTechs([...props.techs, newTech]);

        setType('');
        setIcon('');
        setLabel('');
    }

    return (
        <Form>
            <div>
                <label>Título</label>
                <input
                    type='text'
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Descrição Curta</label>
                <input
                    type='text'
                    value={props.shortDescription}
                    onChange={(e) => props.setShortDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Descrição Longa</label>
                <textarea
                    rows="3"
                    value={props.longDescription}
                    onChange={(e) => props.setLongDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Imagem</label>
                <input
                    type='text'
                    value={props.image}
                    onChange={(e) => props.setImage(e.target.value)}
                />
            </div>

            {props.techs &&
                <div id='tech-cards'>
                    {props.techs.map((tech) => {
                        return (
                            <div key={tech._id} className='card'>
                                <div className="icon">
                                    <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size='3x' />
                                    {tech.label}
                                </div>
                                <button onClick={(e) => handleRemoveItem(e, tech._id)}>remover</button>
                            </div>
                        )
                    })}
                </div>
            }

            <div id='add-techs'>
                <input
                    type='text'
                    placeholder='Tipo: fab ou fas'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Ícone: github, database'
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Label: GitHub, MongoDB'
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
                <button onClick={(e) => handleAddItem(e)}>Add</button>
            </div>
        </Form>
    )
}

const Form = styled.form`
    margin-top: -1rem;
    margin-bottom: 2rem;

    div{
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
        gap: .3rem;
        margin-bottom: 1rem;

        input, textarea{
            padding: .3rem;
            border-radius: .3rem;
            border: 1px solid black;
        }

        textarea{
            resize: none;
        }
    }

    #tech-cards{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .card{
            width: 8rem;
            display: flex;
            align-items: center;
            justify-content: center;

            button{
                padding: 0.1rem;
                font-size: 1rem;
                color: #ccc;
                background-color: #000;
            }
        }
    }

    #add-techs{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        button{
                padding: 0.5rem;
                font-size: 1rem;
                color: #ccc;
                background-color: #000;
        }
    }
`;

export default PortfolioForm;