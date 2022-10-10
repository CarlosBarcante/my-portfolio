import React from "react";
import { useLocation } from "react-router-dom";

import { pageAnimation } from '../animations/pageAnimation';

import styled from "styled-components";
import { Container } from "../styles";

import ScrollTop from "../components/ScrollTop";
import CardList from "../components/PortfolioCardList";
import PortfolioDetail from "../components/PortfolioDetail";

function Portfolio() {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];

    return (
        <PortfolioContainer
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
            {slug && <PortfolioDetail />}
            <CardList />
            <ScrollTop />
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled(Container)`
    min-height: 90vh;
`;

export default Portfolio;