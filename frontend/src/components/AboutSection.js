import React from "react";

import { motion } from 'framer-motion';
import { titleAnimation } from "../animations/titleAnimation";
import { fadeInAnimation } from "../animations/fadeInAnimation";
import { scrollAnimation } from "../animations/scrollAnimation";
import { useScroll } from "../hooks/useScroll";

import { Container, Description } from '../styles';
import styled from "styled-components";

// import icones
import { faReact, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutSection() {
    const [ref, controls] = useScroll();

    return (
        <AboutContainer
            variants={scrollAnimation}
            animate={controls}
            initial='hidden'
            ref={ref}
        >
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
                        Estou disposto a aprender novas tecnologias que sejam interessantes para a empresa.
                        Algumas das tecnologias que já possuo conhecimento e tenho interesse em trabalhar são:
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
        </AboutContainer>
    )
}

const AboutContainer = styled(Container)`
    min-height: 92vh;
    z-index: 2;
    display: flex;
    justify-content: center;

    #description{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 3rem;

        #introduction{
            text-align: center;
            
            h2{
                color: yellow;
            }
            h3{
                color: #5d88f0;
            }
            p{
                padding: 0.5rem 0;
            }
        }

        #cards{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5rem;

            .card{
                color: #CCC;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                margin-bottom: 2rem;

                h4{
                    min-width: 20%;
                    color: #CCC;
                    text-align: center;
                    border-radius: 7px;
                }
            }
        }

        @media(max-width: 1000px){
            flex-direction: column;
        }
    }
`;

export default AboutSection;