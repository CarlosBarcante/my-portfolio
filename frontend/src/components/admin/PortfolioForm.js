import React from "react";

import styled from "styled-components";

function PortfolioForm() {
    return (
        <Form>
            <div>
                <label>Título</label>
                <input type='text' />
            </div>
            <div>
                <label>Descrição Curta</label>
                <input type='text' />
            </div>
            <div>
                <label>Descrição Longa</label>
                <textarea
                    rows="3"
                    placeholder=""
                />
            </div>
            <div>
                <label>Imagem</label>
                <input type='text' />
            </div>
        </Form>
    )
}

const Form = styled.form`
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

            &:focus{
                background-color: #ccc;
            }
        }

        textarea{
            resize: none;
        }
    }
`;

export default PortfolioForm;