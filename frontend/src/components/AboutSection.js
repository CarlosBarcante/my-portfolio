import React from "react";
import { Container, Description } from '../styles';

function AboutSection() {
    return (
        <Container>
            <Description>
                <h2>Carlos Barçante</h2>
                <h3>Desenvolvedor Full Stack</h3>
                <p>
                    Desenvolvedor Web, tendo iniciado o aprendizado em desenvolvimento em 2021.
                    Estou sempre disposto a aprender novas tecnologias.
                    Algumas das tecnologias que tenho interesse em trabalhar são: Javascript, React, NodeJS, MongoDB.
                </p>
                <button>Contato</button>
            </Description>
        </Container>
    )
}

export default AboutSection;