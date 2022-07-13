import React from "react";
import styled from "styled-components";
import Card from "./PortfolioCard";

function CardList() {
    return (
        <StyledCardList>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledCardList>
    )
}

const StyledCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
`;

export default CardList;