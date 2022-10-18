import React from "react";

import { motion } from 'framer-motion';
import { titleAnimation } from "../animations/titleAnimation";
import { fadeInAnimation } from "../animations/fadeInAnimation";

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
                <div id="introduction">
                    <motion.div variants={titleAnimation}>
                        <h2>Carlos Barçante</h2>
                        <h3>Desenvolvedor Full Stack</h3>
                    </motion.div>

                    {/* <motion.h2 variants={titleAnimation}>Carlos Barçante</motion.h2>
                    <motion.h3 variants={titleAnimation}>Desenvolvedor Full Stack</motion.h3> */}

                    <motion.p variants={fadeInAnimation}>
                        Desenvolvedor Full Stack, tendo iniciado o aprendizado em desenvolvimento em 2021.
                        Estou sempre disposto a aprender novas tecnologias.
                        Algumas das tecnologias que tenho interesse em trabalhar são:
                    </motion.p>
                </div>
                <motion.div id="cards" variants={fadeInAnimation}>
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
                </motion.div>
            </Description>
            <motion.button variants={fadeInAnimation}>Contato</motion.button>
        </AboutContainer>
    )
}

const AboutContainer = styled(Container)`
    min-height: 90vh;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    #description{
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        #introduction{
            flex: 1;
            p{
                padding: 0.5rem 0;
            }
        }

        #cards{
            flex:1;

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

        @media(max-width: 1000px){
            flex-direction: column;
        }
    }
    button{
        align-self: flex-start;
        width: 200px;
    }

    @media(max-width: 500px){
        button{
            align-self: center;
        }
    }
`;

export default AboutSection;