import React from "react";

import styled from "styled-components";

function PortfolioForm(props) {
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
`;

export default PortfolioForm;