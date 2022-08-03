import React from "react";
import styled from "styled-components";

function Card({ project }) {
    return (
        <StyledCard>
            <img alt="development" src={project.image} />
            <div className="info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    min-height: 40vh;
    max-height: 65vh;
    display: flex;
    flex-direction: column;
    border: 2px solid #5d88f0;
    border-radius: 1rem;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    box-shadow: -4px 4px 15px yellow;

    img{
        height: 60%;
        width: 100%;
    }

    .info{
        height: 40%;
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
`;

export default Card;