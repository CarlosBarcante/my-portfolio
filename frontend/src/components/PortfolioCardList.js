import React from "react";

import styled from "styled-components";

import Card from "./PortfolioCard";

import { useApi } from "../hooks/useApi";

function CardList() {
    const { data } = useApi('/portfolio');

    return (
        <StyledCardList>
            {data?.data?.map(project => {
                return (<Card key={project.slug} project={project} />);
            })}
        </StyledCardList>
    )
}

const StyledCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem 1rem;
    margin-bottom: 1rem;
`;

export default CardList;