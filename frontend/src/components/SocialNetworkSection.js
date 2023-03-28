import React from "react";
import styled from "styled-components";

// icons
import { faGithubSquare, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialNetworkSection() {
    return (
        <Social>
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