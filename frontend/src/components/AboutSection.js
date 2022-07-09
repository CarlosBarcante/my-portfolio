import React from "react";
import { Container, Description } from '../styles';

function AboutSection() {
    return (
        <Container>
            <Description>
                <h2>Carlos Barçante</h2>
                <h2>Desenvolvedor Web</h2>
                <p>
                    Desenvolvedor Web, tendo iniciado o aprendizado em desenvolvimento em 2021.
                    Estou sempre disposto a aprender novas tecnologias.
                    Algumas das tecnologias que tenho interesse em trabalhar são: HTML, CSS, Javascript, React, Node.js, MongoDB.
                </p>
                <button>Contato</button>
            </Description>
        </Container>
    )
}

export default AboutSection;