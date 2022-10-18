import React from "react";
import { Link } from 'react-router-dom';

import { scrollAnimation } from "../animations/scrollAnimation";
import { useScroll } from "../hooks/useScroll";

import styled from "styled-components";
import { Container, Description } from '../styles'

// import icons
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ServiceSection() {
    const [ref, controls] = useScroll();

    return (
        <ServiceContainer
            variants={scrollAnimation}
            animate={controls}
            initial='hidden'
            ref={ref}
        >
            <Services>
                <h2>Sobre <span>mim</span></h2>
                <Cards>
                    <Card>
                        <a href='https://github.com/CarlosBarcante' target="_blank" rel="noreferrer">
                            <div className="icon">
                                <FontAwesomeIcon icon={faGithubSquare} size='4x' />
                                <h3>Github</h3>
                            </div>
                        </a>
                        <p>Dê uma olhada no meu perfil do Github.</p>
                    </Card>
                    <Card>
                        <a href='https://www.linkedin.com/in/carlos-eduardo-barçante-8500b6241/' target="_blank" rel="noreferrer">
                            <div className="icon">
                                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                                <h3>LinkedIn</h3>
                            </div>
                        </a>
                        <p>Dê uma olhada no meu perfil do LinkedIn.</p>
                    </Card>
                    <Card>
                        <Link to='/courses'>
                            <div className="icon">
                                <FontAwesomeIcon icon={faLaptopCode} size='4x' />
                                <h3>Cursos</h3>
                            </div>
                        </Link>
                        <p>Dê uma olhada nos cursos que fiz.</p>
                    </Card>
                </Cards>
            </Services>
        </ServiceContainer>
    )
}

const ServiceContainer = styled(Container)`
    min-height: 100vh;
    z-index: 2;
    display: flex;
    align-items: center;
`;

const Services = styled(Description)`
    h2{
        padding-bottom: 4rem;
        text-align: center;
    }
    p{
        width: 70%;
        padding: 2rem 0.5rem 4rem 0.5rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
`;

const Card = styled.div`
    flex-basis: 10rem;

    .icon{
        color: #5d88f0;
        padding: 0.5rem;
        display: flex;
        align-items: center;

        h3{
            margin-left: 1rem;
            background-color: #5d88f0;
            border-radius: 5px;
            color: black;
            padding: 1rem;
        }

        &:hover{
            color: yellow;
            transform: scale(1.05);

            h3{
                background-color: yellow;
            }
        }
    }

    p{
        font-size: 1rem;
        width: 100%;
    }
`;

export default ServiceSection;