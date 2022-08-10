import React from "react";
import styled from "styled-components";

function ContactFormSection() {
    return (
        <Form method="post">
            <div>
                <label>Nome:</label>
                <input type="text" placeholder="Seu nome" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder="Seu email" />
            </div>
            <div>
                <label>Menssagem:</label>
                <textarea rows="5" placeholder="Sua menssagem" />
            </div>
            <button type="submit">Enviar</button>
        </Form>
    )
}

const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        label{
            color: #ccc;
            font-size: 1.6rem;
        }

        input, textarea{
            width: 60%;
            padding: 0.9rem;
            border-radius: 7px;
            &:focus{
                background-color: #ccc;
            }
        }

        textarea{
            resize: none;
        }
    }

    button{
        width: 40%;
        margin: auto;
        text-align: center;
        border-color: #ccc;
        color: #ccc;

        &:hover{
            background-color: #ccc;
            color: black;
        }
    }

    @media (max-width: 800px){
        margin-bottom: 20px;
    }
`;

export default ContactFormSection;