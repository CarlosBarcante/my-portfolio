import React, { useState } from "react";
import moment from 'moment';

import styled from "styled-components";

import { save } from '../services/Sheet';

function ContactFormSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function resetForm() {
        setName('');
        setEmail('');
        setMessage('');
    }

    function submitContactMe(e) {
        e.preventDefault();

        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format('DD/MM/YYYY')
        }

        save(data);
        resetForm();
    }

    return (
        <Form onSubmit={submitContactMe}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    placeholder="Seu nome"
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Seu email"
                />
            </div>
            <div>
                <label>Menssagem:</label>
                <textarea
                    rows="5"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    placeholder="Sua menssagem"
                />
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
        align-self: flex-end;
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