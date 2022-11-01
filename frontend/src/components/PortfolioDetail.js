import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from "../hooks/useApi";

function PortfolioDetail() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const { data } = useApi(`/portfolio/${slug}`);

    function exitDetailHandle(e) {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            navigate('../portfolio', { replace: true })
        }
    }

    return (
        <Shadow className="shadow" onClick={exitDetailHandle}>
            <Detail>
                <div id="detail-header">
                    <div>
                        <h4>{data?.data?.title}</h4>
                        <p>{data?.data?.description}</p>
                    </div>
                    <div id="icons">
                        {data?.data?.technologies.map(tech => {
                            return (
                                <div className="icon" key={tech.label}>
                                    <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size='3x' /> {tech.label}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="description">
                    <p>{data?.data?.longDescription}</p>
                </div>
                <img src={data?.data?.image} alt="exemplo" />
            </Detail>
        </Shadow>
    )
}

const Shadow = styled.div`
    width: 100vw;
    height: 150vh;
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`;

const Detail = styled.div`
    width: 70vw;
    position: absolute;
    top: 5%;
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
        
        @media (max-width: 800px) {
            flex-direction: column;
        }
    }

    #description{
        padding: 0.5rem 5rem;
        
        p{
            font-size: 1.2rem;
        }
    }

    img{
        width: 60%;
        margin: 1rem 0;
        align-self: center;
        border: 1px solid #5d88f0;
        border-radius: 1rem;
        box-shadow: 0px 5px 14px #5d88f0;
    }
`;

export default PortfolioDetail;