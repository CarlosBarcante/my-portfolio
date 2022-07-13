import React from "react";
import styled from "styled-components";
import { Container } from "../styles";
import CardList from "../components/PortfolioCardList";

function Portfolio() {
    return (
        <PortfolioContainer>
            <CardList />
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled(Container)`
    max-width: none;
    min-height: 90vh;
    padding: 5rem 5rem;
`;

export default Portfolio;