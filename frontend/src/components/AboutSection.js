import React from "react";
import { Container, Description } from '../styles';
import styled from "styled-components";

// import icones
import { faReact, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutSection() {
    return (
        <AboutContainer>
            <Description id="description">
                <h2>Carlos Barçante</h2>
                <h3>Desenvolvedor Full Stack</h3>
                <p>
                    Desenvolvedor Web, tendo iniciado o aprendizado em desenvolvimento em 2021.
                    Estou sempre disposto a aprender novas tecnologias.
                    Algumas das tecnologias que tenho interesse em trabalhar são:
                </p>
                <button>Contato</button>
            </Description>
            <div id="cards">
                <div className="card">
                    <FontAwesomeIcon icon={faJsSquare} size="4x" />
                    <h4>Javascript</h4>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faNodeJs} size="4x" />
                    <h4>NodeJS</h4>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faReact} size="4x" />
                    <h4>React</h4>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faDatabase} size="4x" />
                    <h4>MongoDB</h4>
                </div>
            </div>
        </AboutContainer>
    )
}

const AboutContainer = styled(Container)`
    min-height: 99vh;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    padding: 5rem 0;

    #description{
        button{
            width: 200px;
        }
    }
    
    #cards{
        flex: 1;
        padding: 2.5rem 0;
        .card{
            color: #CCC;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            h4{
                min-width: 20%;
                margin-left: 1rem;
                
                color: #CCC;
                text-align: start;
                border-radius: 7px;
            }
        }
    }
`;

export default AboutSection;