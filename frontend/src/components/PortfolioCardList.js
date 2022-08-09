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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
`;

export default CardList;