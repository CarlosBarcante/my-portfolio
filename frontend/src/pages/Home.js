import React from 'react';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animations/pageAnimation';
import { titleAnimation } from "../animations/titleAnimation";
import { fadeInAnimation } from "../animations/fadeInAnimation";
import { scrollAnimation } from "../animations/scrollAnimation";
import { useScroll } from "../hooks/useScroll";

import ScrollTop from '../components/ScrollTop';

import styled from "styled-components";

// import icones
import { faReact, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [ref, controls] = useScroll();

    return (
        <motion.main
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
            <AboutContainer
                variants={scrollAnimation}
                animate={controls}
                initial='hidden'
                ref={ref}
            >
                <div id="description">
                    <div id="introduction">
                        <motion.div variants={titleAnimation}>
                            <h2>Carlos Barçante</h2>
                            <h3>Desenvolvedor Full Stack</h3>
                        </motion.div>

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
                </div>
            </AboutContainer>

            <ScrollTop />
        </motion.main>
    )
}

const AboutContainer = styled.div`
    z-index: 2;
    display: flex;
    padding: .5rem;

    #description{
        display: flex;
        flex-direction: column;
        gap: 2rem;

        #introduction{
            h2{
                color: #00ff00;
            }
            h3{
                color: #6699ff;
            }
            h2, h3{
                text-align: center;
            }
            p{
                margin-top: 10px;
                padding:0;
            }
        }

        #cards{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5rem;

            .card{
                color: #ccc;
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

export default Home;