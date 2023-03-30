import React from "react";
import { useLocation } from "react-router-dom";

import { pageAnimation } from '../animations/pageAnimation';

import ScrollTop from "../components/ScrollTop";
import CardList from "../components/PortfolioCardList";
import PortfolioDetail from "../components/PortfolioDetail";

function Portfolio() {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];

    return (
        <main
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
            {slug && <PortfolioDetail />}
            <CardList />
            <ScrollTop />
        </main>
    )
}

export default Portfolio;