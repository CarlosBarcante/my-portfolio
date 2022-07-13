import React from "react";
import styled from "styled-components";

function Card() {
    return (
        <StyledCard>
            <img alt="development" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div className="info">
                <h4>Title</h4>
                <p>Short Description.</p>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid #5d88f0;
    border-radius: 1rem;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    box-shadow: -4px 4px 15px yellow;

    img{
        height: 100%;
        width: 100%;
    }

    .info{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: left;
        padding: .5rem;
        background-color: #ccc;
        p{
            color: black;
        }
    }
`;

export default Card;