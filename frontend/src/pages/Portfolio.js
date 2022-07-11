import React from "react";
import styled from "styled-components";
import { Container } from "../styles";

function Portfolio() {
    return (
        <PortfolioContainer>
            <div id="cardList">
                <div className="card">
                    <div>IMAGEM</div>
                    <div>
                        <h4>Title</h4>
                        <p>Short Description.</p>
                    </div>
                </div>
                <div className="card">
                    <div>IMAGEM</div>
                    <div>
                        <h4>Title</h4>
                        <p>Short Description.</p>
                    </div>
                </div>
                <div className="card">
                    <div>IMAGEM</div>
                    <div>
                        <h4>Title</h4>
                        <p>Short Description.</p>
                    </div>
                </div>
            </div>
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled(Container)`
    min-height: 90vh;
    overflow: hidden;
    padding: 1rem 0;
`;

export default Portfolio;