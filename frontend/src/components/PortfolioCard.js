import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Card({ project }) {
    return (
        <StyledCard>
            <Link to={`/portfolio/${project.slug}`}>
                <div className="card-content">
                    <img alt="development" src={project.image} />
                    <div className="info">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                </div>
            </Link>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    min-height: 40vh;
    max-height: 75vh;
    border: 1px solid #5d88f0;
    box-shadow: 0px 5px 14px #5d88f0;
    border-radius: 1rem;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    .card-content{
        height: 100%;
        display: flex;
        flex-direction: column;

        img{
            height: 65%;
            width: 100%;
        }

        .info{
            height: 35%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            text-align: left;
            background-color: #ccc;
            padding: .5rem;
            h4{
                font-size: 1.2rem;
            }
            p{
                font-size: 1.2rem;
                color: black;
                padding: 0 0;
                margin-top: .5rem;
                overflow: hidden;
            }
        }
    }

    &:hover{
        transform: scale(1.01);
        border: 1px solid yellow;
        box-shadow: 0px 5px 14px yellow;
    }
`;

export default Card;