import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PortfolioForm(props) {
    function handleRemoveItem(event, id) {
        event.preventDefault();
        const newTechs = props.techs.filter(tech => tech._id !== id);
        props.setTechs(newTechs);
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
                            <div className='card'>
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
                />
                <input
                    type='text'
                    placeholder='Ícone: github, database'
                />
                <input
                    type='text'
                    placeholder='Label: GitHub, MongoDB'
                />
                <button>Add</button>
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

        button{
                padding: 0.5rem;
                font-size: 1rem;
                color: #ccc;
                background-color: #000;
        }
    }
`;

export default PortfolioForm;