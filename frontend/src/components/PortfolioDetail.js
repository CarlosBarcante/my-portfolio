import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useApi } from "../hooks/useApi";

function PortfolioDetail() {
    const { slug } = useParams();
    const { data } = useApi(`/portfolio/${slug}`);

    return (
        <Detail>
            <div id="detail-header">
                <div>
                    <h4>{data?.data?.title}</h4>
                    <p>{data?.data?.description}</p>
                </div>
                <div id="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={["fab", "react"]} size='3x' /> React
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={["fab", "node-js"]} size='3x' /> Node
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={["fas", "database"]} size='3x' /> MongoDB
                    </div>
                </div>
            </div>
            <div id="description">
                <p>Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description Long Description</p>
            </div>
            <img src={data?.data?.image} alt="exemplo" />
        </Detail>
    )
}

const Detail = styled.div`
    width: 70vw;
    min-height: 80vh;
    position: absolute;
    top: 12%;
    left: 15%;
    z-index: 10;
    border: 1px solid yellow;
    box-shadow: 0px 5px 14px yellow;
    border-radius: .8rem;
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-direction: column;

    p{
        padding: 0 0;
        color: #5d88f0;
    }

    #detail-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 5rem;

        h4{
            font-size: 3rem;
            color: #5d88f0;
        }

        p{
            font-size: 1rem;
        }

       
        #icons{
            min-width: 300px;
            display: flex;
            justify-content: space-evenly;    

            .icon{
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #5d88f0;
            }
        }
        
    }

    #description{
        padding: 0.5rem 5rem;
        
        p{
            font-size: 1.2rem;
        }
    }

    img{
        width: 100%;
        object-fit: cover;
        height: 55vh;
    }
`;

export default PortfolioDetail;