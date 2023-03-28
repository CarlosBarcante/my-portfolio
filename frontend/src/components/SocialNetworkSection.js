import React from "react";
import styled from "styled-components";

// import icones
import { faGithubSquare, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialNetworkSection() {
    return (
        <Social>
            {/* <div className="card">
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
            </div> */}
            <a href='https://www.linkedin.com/in/carlos-eduardo-barçante-gomes-8500b6241/' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size='4x' />
            </a>
            <a href='https://t.me/Carlos_Barcante' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTelegram} size='4x' />
            </a>
            <a href='mailto:barcantecarlosdev@gmail.com' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size='4x' />
            </a>
            <a href='https://github.com/CarlosBarcante' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} size='4x' />
            </a>
        </Social>
    )
}

const Social = styled.div`
    display: flex;
    justify-content: space-between;

    svg{
        color: #6699ff;

        &:hover{
            color: #CCC;
        }
    }   
`;

export default SocialNetworkSection;