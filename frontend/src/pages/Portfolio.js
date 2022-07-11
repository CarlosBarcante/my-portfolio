import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import Card from "../components/Card";

function Portfolio() {
    return (
        <PortfolioContainer>
            <div id="cardList">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled(Container)`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 0 5rem 20px;

    #cardList{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 2rem;
        grid-row-gap: 5rem;
    }
`;

export default Portfolio;