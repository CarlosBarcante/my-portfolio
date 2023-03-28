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
    /* height: 19rem; */
    height: 100%;
    border: 1px solid #6699ff;
    box-shadow: 0px 5px 14px #6699ff;
    border-radius: 1rem;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    .card-content{
        height: 100%;
        display: flex;
        flex-direction: column;

        img{
            width: 100%;
        }

        .info{
            /* display: flex;
            flex-direction: column;
            justify-content: start; */
            text-align: left;
            background-color: #cccccc33;
            padding: .5rem;
            h4{
                color: #00ff00;
                font-size: 1.2rem;
            }
            p{
                font-size: 1.2rem;
                color: #6699ff;
                padding: 0 0;
                margin-top: .5rem;
                overflow: hidden;
            }
        }
    }

    &:hover{
        transform: scale(1.01);
        border: 1px solid #00ff00;
        box-shadow: 0px 5px 14px #00ff00;
    }
`;

export default Card;