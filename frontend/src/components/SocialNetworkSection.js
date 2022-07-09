import React from "react";
import styled from "styled-components";

// import icones
import { faGithubSquare, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialNetworkSection() {
    return (
        <Social>
            <div className="card">
                <a href='https://github.com/CarlosBarcante' target="_blank" rel="noreferrer">
                    <div className="icon">
                        <FontAwesomeIcon icon={faGithubSquare} size='4x' />
                        <h3>Github</h3>
                    </div>
                </a>
            </div>
            <div className="card">
                <a href='https://www.linkedin.com/in/carlos-eduardo-barçante-8500b6241/' target="_blank" rel="noreferrer">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLinkedin} size='4x' />
                        <h3>LinkedIn</h3>
                    </div>
                </a>
            </div>
            <div className="card">
                <a href='mailto:barcantecarlosdev@gmail.com' target="_blank" rel="noreferrer">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} size='4x' />
                        <h3>Email</h3>
                    </div>
                </a>
            </div>
            <div className="card">
                <a href='https://t.me/Carlos_Barcante' target="_blank" rel="noreferrer">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTelegram} size='4x' />
                        <h3>Telegram</h3>
                    </div>
                </a>
            </div>
        </Social>
    )
}

const Social = styled.div`
    flex: 1;
    .card{
        a{
            text-decoration: none;
        }
        .icon{
            color: #ccc;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            h3{
                min-width: 50%;
                margin-left: 1rem;
                background-color: #ccc;
                color: black;
                padding: 1rem;
                text-align: center;
                border-radius: 7px 50px;
            }
            &:hover{
                color: yellow;
                transform: scale(1.05);
                   h3{
                    background-color: yellow;
                }
            }
        }
    }
        
`;

export default SocialNetworkSection;