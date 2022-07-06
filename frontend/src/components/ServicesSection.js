import React from "react";
import styled from "styled-components";
import { Description } from '../styles'

function ServiceSection() {
    return (
        <Services>
            <h2>Sobre mim</h2>
            <Cards>
                <Card>
                    <div className="icon">
                        Icone
                        <h3>Github</h3>
                    </div>
                    <p>Dê uma olhada no meu portifólio.</p>
                </Card>
                <Card>
                    <div className="icon">
                        Icone
                        <h3>LinkedIn</h3>
                    </div>
                    <p>Dê uma olhada no meu perfil no LinkedIn.</p>
                </Card>
                <Card>
                    <div className="icon">
                        Icone
                        <h3>Cursos</h3>
                    </div>
                    <p>Dê uma olhada nos cursos que fiz.</p>
                </Card>
            </Cards>
        </Services>
    )
}

const Services = styled(Description)`
    h2{
        padding-bottom: 4rem;
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
        padding: 0.5rem;
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServiceSection;