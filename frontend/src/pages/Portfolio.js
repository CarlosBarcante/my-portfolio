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
    min-height: 90vh;
`;

export default Portfolio;