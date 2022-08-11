import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles";
import CardList from "../components/PortfolioCardList";
import PortfolioDetail from "../components/PortfolioDetail";

function Portfolio() {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];

    return (
        <PortfolioContainer>
            {slug && <PortfolioDetail />}
            <CardList />
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled(Container)`
    min-height: 90vh;
`;

export default Portfolio;